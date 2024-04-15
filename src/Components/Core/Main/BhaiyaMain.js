import React from 'react'

function BhaiyaMain() {
  return (
    <div>
        <table style="width: 97%; margin-left: 16px; margin-top: 25px;">
    <tr style="color: gray;">
        <th style="padding-left: 16px;">code</th>
        <th>authentication</th>
        <th>exclusionList</th>
        <th>userCount</th>
        <th>userLimit</th>
    </tr>
    <tr >
        <td >P12234</td>
        <td >0</td>
        <td>1000</td>
        <td>Na</td>
        <td>Na</td>
        {/* <td>
            <mat-icon (click)="gotoCustomCode()" style="height: 25px; width: 25px; border: 1px solid gray; border-radius: 50%; cursor: pointer;">
                <span>chevron_right</span>
            </mat-icon>
        </td> */}
    </tr>
</table>
    </div>
  )
}

export default BhaiyaMain