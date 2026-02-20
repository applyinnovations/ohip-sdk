# ChangeAccountForecastsRS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 
**EchoToken** | Pointer to **string** | A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value. | [optional] 
**TimeStamp** | Pointer to **string** | Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z). | [optional] 
**Version** | Pointer to **string** | For all Opera versioned messages, the version of the message is indicated by a Opera Version value. | [optional] 
**CorrelationId** | Pointer to **string** | Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message. | [optional] 
**RetryAllowed** | Pointer to **bool** | Indicates if the operation supports the ability to retry the request. | [optional] 
**EnforceAllowed** | Pointer to **bool** | Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. | [optional] 
**UseLocalAllowed** | Pointer to **bool** | This attribute carries the user selected confirmation value on confirmation popup. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewChangeAccountForecastsRS

`func NewChangeAccountForecastsRS() *ChangeAccountForecastsRS`

NewChangeAccountForecastsRS instantiates a new ChangeAccountForecastsRS object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeAccountForecastsRSWithDefaults

`func NewChangeAccountForecastsRSWithDefaults() *ChangeAccountForecastsRS`

NewChangeAccountForecastsRSWithDefaults instantiates a new ChangeAccountForecastsRS object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ChangeAccountForecastsRS) GetSuccess() map[string]interface{}`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ChangeAccountForecastsRS) GetSuccessOk() (*map[string]interface{}, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ChangeAccountForecastsRS) SetSuccess(v map[string]interface{})`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ChangeAccountForecastsRS) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeAccountForecastsRS) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeAccountForecastsRS) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeAccountForecastsRS) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeAccountForecastsRS) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetErrors

`func (o *ChangeAccountForecastsRS) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ChangeAccountForecastsRS) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ChangeAccountForecastsRS) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ChangeAccountForecastsRS) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetEchoToken

`func (o *ChangeAccountForecastsRS) GetEchoToken() string`

GetEchoToken returns the EchoToken field if non-nil, zero value otherwise.

### GetEchoTokenOk

`func (o *ChangeAccountForecastsRS) GetEchoTokenOk() (*string, bool)`

GetEchoTokenOk returns a tuple with the EchoToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEchoToken

`func (o *ChangeAccountForecastsRS) SetEchoToken(v string)`

SetEchoToken sets EchoToken field to given value.

### HasEchoToken

`func (o *ChangeAccountForecastsRS) HasEchoToken() bool`

HasEchoToken returns a boolean if a field has been set.

### GetTimeStamp

`func (o *ChangeAccountForecastsRS) GetTimeStamp() string`

GetTimeStamp returns the TimeStamp field if non-nil, zero value otherwise.

### GetTimeStampOk

`func (o *ChangeAccountForecastsRS) GetTimeStampOk() (*string, bool)`

GetTimeStampOk returns a tuple with the TimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStamp

`func (o *ChangeAccountForecastsRS) SetTimeStamp(v string)`

SetTimeStamp sets TimeStamp field to given value.

### HasTimeStamp

`func (o *ChangeAccountForecastsRS) HasTimeStamp() bool`

HasTimeStamp returns a boolean if a field has been set.

### GetVersion

`func (o *ChangeAccountForecastsRS) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ChangeAccountForecastsRS) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ChangeAccountForecastsRS) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ChangeAccountForecastsRS) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetCorrelationId

`func (o *ChangeAccountForecastsRS) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *ChangeAccountForecastsRS) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *ChangeAccountForecastsRS) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.

### HasCorrelationId

`func (o *ChangeAccountForecastsRS) HasCorrelationId() bool`

HasCorrelationId returns a boolean if a field has been set.

### GetRetryAllowed

`func (o *ChangeAccountForecastsRS) GetRetryAllowed() bool`

GetRetryAllowed returns the RetryAllowed field if non-nil, zero value otherwise.

### GetRetryAllowedOk

`func (o *ChangeAccountForecastsRS) GetRetryAllowedOk() (*bool, bool)`

GetRetryAllowedOk returns a tuple with the RetryAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryAllowed

`func (o *ChangeAccountForecastsRS) SetRetryAllowed(v bool)`

SetRetryAllowed sets RetryAllowed field to given value.

### HasRetryAllowed

`func (o *ChangeAccountForecastsRS) HasRetryAllowed() bool`

HasRetryAllowed returns a boolean if a field has been set.

### GetEnforceAllowed

`func (o *ChangeAccountForecastsRS) GetEnforceAllowed() bool`

GetEnforceAllowed returns the EnforceAllowed field if non-nil, zero value otherwise.

### GetEnforceAllowedOk

`func (o *ChangeAccountForecastsRS) GetEnforceAllowedOk() (*bool, bool)`

GetEnforceAllowedOk returns a tuple with the EnforceAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnforceAllowed

`func (o *ChangeAccountForecastsRS) SetEnforceAllowed(v bool)`

SetEnforceAllowed sets EnforceAllowed field to given value.

### HasEnforceAllowed

`func (o *ChangeAccountForecastsRS) HasEnforceAllowed() bool`

HasEnforceAllowed returns a boolean if a field has been set.

### GetUseLocalAllowed

`func (o *ChangeAccountForecastsRS) GetUseLocalAllowed() bool`

GetUseLocalAllowed returns the UseLocalAllowed field if non-nil, zero value otherwise.

### GetUseLocalAllowedOk

`func (o *ChangeAccountForecastsRS) GetUseLocalAllowedOk() (*bool, bool)`

GetUseLocalAllowedOk returns a tuple with the UseLocalAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseLocalAllowed

`func (o *ChangeAccountForecastsRS) SetUseLocalAllowed(v bool)`

SetUseLocalAllowed sets UseLocalAllowed field to given value.

### HasUseLocalAllowed

`func (o *ChangeAccountForecastsRS) HasUseLocalAllowed() bool`

HasUseLocalAllowed returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeAccountForecastsRS) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeAccountForecastsRS) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeAccountForecastsRS) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeAccountForecastsRS) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


