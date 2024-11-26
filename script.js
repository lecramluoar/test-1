{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\partightenfactor0

\f0\fs26 \cf0 document.getElementById('shiftForm').addEventListener('submit', function(e) \{\
    e.preventDefault();\
    \
    // Get values from form\
    const employee = document.getElementById('employee').value;\
    const shiftDay = document.getElementById('shiftDay').value;\
    const shiftTime = document.getElementById('shiftTime').value;\
    \
    // Create new row in table\
    const table = document.getElementById('shiftTable').getElementsByTagName('tbody')[0];\
    const newRow = table.insertRow();\
    \
    // Insert cells and add values to them\
    const cell1 = newRow.insertCell(0);\
    const cell2 = newRow.insertCell(1);\
    const cell3 = newRow.insertCell(2);\
    \
    cell1.textContent = employee;\
    cell2.textContent = shiftDay;\
    cell3.textContent = shiftTime;\
    \
    // Clear form inputs\
    document.getElementById('shiftForm').reset();\
\});\
}