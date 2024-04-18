# ChangeActivityStatusCodesRS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelationId** | Pointer to **string** | Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message. | [optional] 
**EchoToken** | Pointer to **string** | A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value. | [optional] 
**EnforceAllowed** | Pointer to **bool** | Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RetryAllowed** | Pointer to **bool** | Indicates if the operation supports the ability to retry the request. | [optional] 
**Success** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors. | [optional] 
**TimeStamp** | Pointer to **string** | Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z). | [optional] 
**UseLocalAllowed** | Pointer to **bool** | This attribute carries the user selected confirmation value on confirmation popup. | [optional] 
**Version** | Pointer to **string** | For all Opera versioned messages, the version of the message is indicated by a Opera Version value. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeActivityStatusCodesRS

`func NewChangeActivityStatusCodesRS() *ChangeActivityStatusCodesRS`

NewChangeActivityStatusCodesRS instantiates a new ChangeActivityStatusCodesRS object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeActivityStatusCodesRSWithDefaults

`func NewChangeActivityStatusCodesRSWithDefaults() *ChangeActivityStatusCodesRS`

NewChangeActivityStatusCodesRSWithDefaults instantiates a new ChangeActivityStatusCodesRS object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorrelationId

`func (o *ChangeActivityStatusCodesRS) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *ChangeActivityStatusCodesRS) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *ChangeActivityStatusCodesRS) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.

### HasCorrelationId

`func (o *ChangeActivityStatusCodesRS) HasCorrelationId() bool`

HasCorrelationId returns a boolean if a field has been set.

### GetEchoToken

`func (o *ChangeActivityStatusCodesRS) GetEchoToken() string`

GetEchoToken returns the EchoToken field if non-nil, zero value otherwise.

### GetEchoTokenOk

`func (o *ChangeActivityStatusCodesRS) GetEchoTokenOk() (*string, bool)`

GetEchoTokenOk returns a tuple with the EchoToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEchoToken

`func (o *ChangeActivityStatusCodesRS) SetEchoToken(v string)`

SetEchoToken sets EchoToken field to given value.

### HasEchoToken

`func (o *ChangeActivityStatusCodesRS) HasEchoToken() bool`

HasEchoToken returns a boolean if a field has been set.

### GetEnforceAllowed

`func (o *ChangeActivityStatusCodesRS) GetEnforceAllowed() bool`

GetEnforceAllowed returns the EnforceAllowed field if non-nil, zero value otherwise.

### GetEnforceAllowedOk

`func (o *ChangeActivityStatusCodesRS) GetEnforceAllowedOk() (*bool, bool)`

GetEnforceAllowedOk returns a tuple with the EnforceAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnforceAllowed

`func (o *ChangeActivityStatusCodesRS) SetEnforceAllowed(v bool)`

SetEnforceAllowed sets EnforceAllowed field to given value.

### HasEnforceAllowed

`func (o *ChangeActivityStatusCodesRS) HasEnforceAllowed() bool`

HasEnforceAllowed returns a boolean if a field has been set.

### GetErrors

`func (o *ChangeActivityStatusCodesRS) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ChangeActivityStatusCodesRS) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ChangeActivityStatusCodesRS) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ChangeActivityStatusCodesRS) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeActivityStatusCodesRS) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeActivityStatusCodesRS) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeActivityStatusCodesRS) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeActivityStatusCodesRS) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRetryAllowed

`func (o *ChangeActivityStatusCodesRS) GetRetryAllowed() bool`

GetRetryAllowed returns the RetryAllowed field if non-nil, zero value otherwise.

### GetRetryAllowedOk

`func (o *ChangeActivityStatusCodesRS) GetRetryAllowedOk() (*bool, bool)`

GetRetryAllowedOk returns a tuple with the RetryAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryAllowed

`func (o *ChangeActivityStatusCodesRS) SetRetryAllowed(v bool)`

SetRetryAllowed sets RetryAllowed field to given value.

### HasRetryAllowed

`func (o *ChangeActivityStatusCodesRS) HasRetryAllowed() bool`

HasRetryAllowed returns a boolean if a field has been set.

### GetSuccess

`func (o *ChangeActivityStatusCodesRS) GetSuccess() map[string]interface{}`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ChangeActivityStatusCodesRS) GetSuccessOk() (*map[string]interface{}, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ChangeActivityStatusCodesRS) SetSuccess(v map[string]interface{})`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ChangeActivityStatusCodesRS) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetTimeStamp

`func (o *ChangeActivityStatusCodesRS) GetTimeStamp() string`

GetTimeStamp returns the TimeStamp field if non-nil, zero value otherwise.

### GetTimeStampOk

`func (o *ChangeActivityStatusCodesRS) GetTimeStampOk() (*string, bool)`

GetTimeStampOk returns a tuple with the TimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStamp

`func (o *ChangeActivityStatusCodesRS) SetTimeStamp(v string)`

SetTimeStamp sets TimeStamp field to given value.

### HasTimeStamp

`func (o *ChangeActivityStatusCodesRS) HasTimeStamp() bool`

HasTimeStamp returns a boolean if a field has been set.

### GetUseLocalAllowed

`func (o *ChangeActivityStatusCodesRS) GetUseLocalAllowed() bool`

GetUseLocalAllowed returns the UseLocalAllowed field if non-nil, zero value otherwise.

### GetUseLocalAllowedOk

`func (o *ChangeActivityStatusCodesRS) GetUseLocalAllowedOk() (*bool, bool)`

GetUseLocalAllowedOk returns a tuple with the UseLocalAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseLocalAllowed

`func (o *ChangeActivityStatusCodesRS) SetUseLocalAllowed(v bool)`

SetUseLocalAllowed sets UseLocalAllowed field to given value.

### HasUseLocalAllowed

`func (o *ChangeActivityStatusCodesRS) HasUseLocalAllowed() bool`

HasUseLocalAllowed returns a boolean if a field has been set.

### GetVersion

`func (o *ChangeActivityStatusCodesRS) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ChangeActivityStatusCodesRS) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ChangeActivityStatusCodesRS) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ChangeActivityStatusCodesRS) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeActivityStatusCodesRS) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeActivityStatusCodesRS) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeActivityStatusCodesRS) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeActivityStatusCodesRS) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

