import React, { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const Counter = () => {
    const [count, setCount] = useState(0);
    const toast = useToast();
    
    const increment = () => {
        setCount(count + 1)
        toast({
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-left',
            render: () => (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 20px 12px 16px',
                        gap: '8px',
                        background: 'radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F',
                        boxShadow: '0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderImageSource: 'linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)',
                        color: '#FFFFFF',
                    }}
                    >

                    {/* Icon */}
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            width: '23px',
                            height: '23px',
                            border: '2px solid #74C898', 
                            marginRight: '12px',
                          }}
                        >
                          <CheckIcon color="#74C898" boxSize="10px" />
                    </div>

                    {/* Text */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Incremented</span>
                        <span style={{ fontSize: '16px', color: '#B0B0B0' }}>Counter is now {count + 1}</span>
                    </div>
                </div>

            ),
        });
    };
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '12px' }}>Current count {count}</p>
            <Button onClick={increment}>+1</Button>        
        </div>
    );
};

export default Counter;