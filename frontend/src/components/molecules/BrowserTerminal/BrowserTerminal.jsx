
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import "@xterm/xterm/css/xterm.css";
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

const BrowserTerminal = () => {
    const terminalRef = useRef(null);
    const socketRef = useRef(null);
    const { projectId: projectIdFromUrl } = useParams();

    useEffect(() => {
        if (terminalRef.current) {
            const terminal = new Terminal({
                cols: 80,
                rows: 24,
                cursorBlink: true,
                theme: {
                    background: '#282a37',
                    foreground: '#f8f8f3',
                    cursor: '#f8f8f3',
                    cursorAccent: '#282a37',
                    red: '#ff5c57',
                    green: '#5af78e',
                    yellow: '#f3f99d',
                    blue: '#57c7ff',
                    cyan: '#8be9fd',
                },
                fontSize: 14,
                fontFamily: 'Fira Code, monospace',
                convertEol: true, // Convert \n to \r\n
            });
            let fitAddon = new FitAddon();
            terminal.loadAddon(fitAddon);
            terminal.open(terminalRef.current);
            fitAddon.fit();
            socketRef.current = io(`${import.meta.env.VITE_BACKEND_URL}/terminal`, {
                query: {
                    projectId: projectIdFromUrl,
                }
            });

            socketRef.current.on("shell-output", (data) => {
                terminal.write(data);
            });

            terminal.onData(data => {
                console.log("Sending data to server:", data);
                socketRef.current.emit("shell-input", data);
            });

            // Cleanup on unmount
            return () => {
                socketRef.current.disconnect();
                terminal.dispose();
            };

        }
    }, []);


    return (
        <div className='w-full h-64 bg-[#232238]' ref={terminalRef}>

        </div>
    )
}

export default BrowserTerminal;