/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

/**
 * @fileoverview Constants used throughout the container classes for
 * embedded experiences.
 */

/**
 * Embedded experience namespace
 * @type {Object}
 */
osapi.container.ee = {};

/**
 * Rendering params for an embedded experience
 * @enum {string}
 */
osapi.container.ee.RenderParams = {};
osapi.container.ee.RenderParams.GADGET_RENDER_PARAMS = 'gadgetRenderParams';
osapi.container.ee.RenderParams.GADGET_VIEW_PARAMS = 'gadgetViewParams';
osapi.container.ee.RenderParams.URL_RENDER_PARAMS = 'urlRenderParams';
osapi.container.ee.RenderParams.DATA_MODEL = 'eeDataModel';
osapi.container.ee.RenderParams.EMBEDDED = 'embedded';