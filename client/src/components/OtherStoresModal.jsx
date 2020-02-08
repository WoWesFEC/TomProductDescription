/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';

const OtherStoresModal = ({ stores, close, id }) => (
  <div className="tom-modal-grid">
    <a href="#stores" type="button" id="tom-stores-button" onClick={stores}><span>CHECK OTHER STORES</span></a>
    <div className="tom-modal-stores" id="tom-modal-stores">
      <div className="tom-modal-stores-content">
        <span className="tom-stores-close-btn" onClick={close}>&times;</span>
        <h4 className="tom-modal-stores-title">Find a Store</h4>
        <div className="tom-modal-stores-search">
          <input type="text" placeholder="Zip Code or City, State" className="tom-modal-stores-input" />
          <button className="tom-modal-stores-find-button">FIND</button>
        </div>
        <ul className="tom-modal-stores-list">
          <li>
            <div className="tom-modal-stores-item">
              <span className="tom-modal-stores-storename">S.W. Austin WoWe&apos;s</span>
              <br />
              <span>6400 Brodie Ln</span>
              <br />
              <span>Austin, TX</span>
            </div>
            <div className="tom-media-middle">
              <span className="tom-align-right">
                <img src="../images/greenCheckbox.png" alt="green checkbox" />
                <small>
                  <strong>
                    {id % 10}
                    {' '}
                    available
                  </strong>
                </small>
              </span>
              <button className="tom-other-stores-button">SHOP THIS STORE</button>
            </div>
          </li>
          <hr className="tom-modal-stores-line" />
          <li>
            <div className="tom-modal-stores-item">
              <span className="tom-modal-stores-storename">Bee Cave WoWe&apos;s</span>
              <br />
              <span>12611 Suite 100 Shops Pkwy</span>
              <br />
              <span>Bee Cave, TX</span>
              <br />
              <small><strong>11.5 mi</strong></small>
            </div>
            <div className="tom-media-middle">
              <span className="tom-align-right">
                <img src="../images/greenCheckbox.png" alt="green checkbox" />
                <small>
                  <strong>
                    {id % 10 * 2}
                    {' '}
                    available
                  </strong>
                </small>
              </span>
              <button className="tom-other-stores-button">SHOP THIS STORE</button>
            </div>
          </li>
          <hr className="tom-modal-stores-line" />
          <li>
            <div className="tom-modal-stores-item">
              <span className="tom-modal-stores-storename">Central Austin WoWe&apos;s</span>
              <br />
              <span>8000 Shoal Creek Blvd</span>
              <br />
              <span>Austin, TX</span>
              <br />
              <small><strong>12.9 mi</strong></small>
            </div>
            <div className="tom-media-middle">
              <span className="tom-align-right">
                <img src="../images/greenCheckbox.png" alt="green checkbox" />
                <small>
                  <strong>
                    {id % 12}
                    {' '}
                    available
                  </strong>
                </small>
              </span>
              <button className="tom-other-stores-button">SHOP THIS STORE</button>
            </div>
          </li>
          <hr className="tom-modal-stores-line" />
          <li>
            <div className="tom-modal-stores-item">
              <span className="tom-modal-stores-storename">N.E. Austin WoWe&apos;s</span>
              <br />
              <span>13000 N I-35 SVC Rd SB, Building 12</span>
              <br />
              <span>Austin, TX</span>
              <br />
              <small><strong>20.6 mi</strong></small>
            </div>
            <div className="tom-media-middle">
              <span className="tom-align-right">
                <img src="../images/greenCheckbox.png" alt="green checkbox" />
                <small>
                  <strong>
                    {id % 15}
                    {' '}
                    available
                  </strong>
                </small>
              </span>
              <button className="tom-other-stores-button">SHOP THIS STORE</button>
            </div>
          </li>
          <hr className="tom-modal-stores-line" />
          <li>
            <div className="tom-modal-stores-item">
              <span className="tom-modal-stores-storename">N.W. Austin WoWe&apos;s</span>
              <br />
              <span>1302 N Ranch Rd 620, Bldg G</span>
              <br />
              <span>Austin, Tx</span>
              <br />
              <small><strong>21.4 mi</strong></small>
            </div>
            <div className="tom-media-middle">
              <span className="tom-align-right">
                <img src="../images/greenCheckbox.png" alt="green checkbox" />
                <small>
                  <strong>
                    {id % 10 + 3}
                    {' '}
                    available
                  </strong>
                </small>
              </span>
              <button className="tom-other-stores-button">SHOP THIS STORE</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default OtherStoresModal;
