# ChangeActivityLocationsRS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 
**EchoToken** | Pointer to **string** | A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value. | [optional] 
**TimeStamp** | Pointer to **time.Time** | Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z). | [optional] 
**Version** | Pointer to **string** | For all Opera versioned messages, the version of the message is indicated by a Opera Version value. | [optional] 
**CorrelationId** | Pointer to **string** | Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message. | [optional] 
**RetryAllowed** | Pointer to **bool** | Indicates if the operation supports the ability to retry the request. | [optional] 
**EnforceAllowed** | Pointer to **bool** | Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. | [optional] 
**UseLocalAllowed** | Pointer to **bool** | This attribute carries the user selected confirmation value on confirmation popup. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewChangeActivityLocationsRS

`func NewChangeActivityLocationsRS() *ChangeActivityLocationsRS`

NewChangeActivityLocationsRS instantiates a new ChangeActivityLocationsRS object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeActivityLocationsRSWithDefaults

`func NewChangeActivityLocationsRSWithDefaults() *ChangeActivityLocationsRS`

NewChangeActivityLocationsRSWithDefaults instantiates a new ChangeActivityLocationsRS object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ChangeActivityLocationsRS) GetSuccess() map[string]interface{}`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ChangeActivityLocationsRS) GetSuccessOk() (*map[string]interface{}, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ChangeActivityLocationsRS) SetSuccess(v map[string]interface{})`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ChangeActivityLocationsRS) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeActivityLocationsRS) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeActivityLocationsRS) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeActivityLocationsRS) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeActivityLocationsRS) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetErrors

`func (o *ChangeActivityLocationsRS) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ChangeActivityLocationsRS) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ChangeActivityLocationsRS) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ChangeActivityLocationsRS) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetEchoToken

`func (o *ChangeActivityLocationsRS) GetEchoToken() string`

GetEchoToken returns the EchoToken field if non-nil, zero value otherwise.

### GetEchoTokenOk

`func (o *ChangeActivityLocationsRS) GetEchoTokenOk() (*string, bool)`

GetEchoTokenOk returns a tuple with the EchoToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEchoToken

`func (o *ChangeActivityLocationsRS) SetEchoToken(v string)`

SetEchoToken sets EchoToken field to given value.

### HasEchoToken

`func (o *ChangeActivityLocationsRS) HasEchoToken() bool`

HasEchoToken returns a boolean if a field has been set.

### GetTimeStamp

`func (o *ChangeActivityLocationsRS) GetTimeStamp() time.Time`

GetTimeStamp returns the TimeStamp field if non-nil, zero value otherwise.

### GetTimeStampOk

`func (o *ChangeActivityLocationsRS) GetTimeStampOk() (*time.Time, bool)`

GetTimeStampOk returns a tuple with the TimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStamp

`func (o *ChangeActivityLocationsRS) SetTimeStamp(v time.Time)`

SetTimeStamp sets TimeStamp field to given value.

### HasTimeStamp

`func (o *ChangeActivityLocationsRS) HasTimeStamp() bool`

HasTimeStamp returns a boolean if a field has been set.

### GetVersion

`func (o *ChangeActivityLocationsRS) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ChangeActivityLocationsRS) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ChangeActivityLocationsRS) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ChangeActivityLocationsRS) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetCorrelationId

`func (o *ChangeActivityLocationsRS) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *ChangeActivityLocationsRS) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *ChangeActivityLocationsRS) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.

### HasCorrelationId

`func (o *ChangeActivityLocationsRS) HasCorrelationId() bool`

HasCorrelationId returns a boolean if a field has been set.

### GetRetryAllowed

`func (o *ChangeActivityLocationsRS) GetRetryAllowed() bool`

GetRetryAllowed returns the RetryAllowed field if non-nil, zero value otherwise.

### GetRetryAllowedOk

`func (o *ChangeActivityLocationsRS) GetRetryAllowedOk() (*bool, bool)`

GetRetryAllowedOk returns a tuple with the RetryAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryAllowed

`func (o *ChangeActivityLocationsRS) SetRetryAllowed(v bool)`

SetRetryAllowed sets RetryAllowed field to given value.

### HasRetryAllowed

`func (o *ChangeActivityLocationsRS) HasRetryAllowed() bool`

HasRetryAllowed returns a boolean if a field has been set.

### GetEnforceAllowed

`func (o *ChangeActivityLocationsRS) GetEnforceAllowed() bool`

GetEnforceAllowed returns the EnforceAllowed field if non-nil, zero value otherwise.

### GetEnforceAllowedOk

`func (o *ChangeActivityLocationsRS) GetEnforceAllowedOk() (*bool, bool)`

GetEnforceAllowedOk returns a tuple with the EnforceAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnforceAllowed

`func (o *ChangeActivityLocationsRS) SetEnforceAllowed(v bool)`

SetEnforceAllowed sets EnforceAllowed field to given value.

### HasEnforceAllowed

`func (o *ChangeActivityLocationsRS) HasEnforceAllowed() bool`

HasEnforceAllowed returns a boolean if a field has been set.

### GetUseLocalAllowed

`func (o *ChangeActivityLocationsRS) GetUseLocalAllowed() bool`

GetUseLocalAllowed returns the UseLocalAllowed field if non-nil, zero value otherwise.

### GetUseLocalAllowedOk

`func (o *ChangeActivityLocationsRS) GetUseLocalAllowedOk() (*bool, bool)`

GetUseLocalAllowedOk returns a tuple with the UseLocalAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseLocalAllowed

`func (o *ChangeActivityLocationsRS) SetUseLocalAllowed(v bool)`

SetUseLocalAllowed sets UseLocalAllowed field to given value.

### HasUseLocalAllowed

`func (o *ChangeActivityLocationsRS) HasUseLocalAllowed() bool`

HasUseLocalAllowed returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeActivityLocationsRS) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeActivityLocationsRS) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeActivityLocationsRS) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeActivityLocationsRS) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


