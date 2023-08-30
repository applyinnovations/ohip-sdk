# SystemErrorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorCode** | Pointer to **string** | Code and description of error. | [optional] 
**ErrorDescription** | Pointer to **string** | description of error. | [optional] 
**ErrorPrefix** | Pointer to **string** | Prefix of system error code. | [optional] 
**ErrorSuffix** | Pointer to **string** | Suffix of system error code. | [optional] 
**BookingResponse** | Pointer to [**SystemErrorBookingResponseType**](SystemErrorBookingResponseType.md) |  | [optional] 
**DateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**ManualProcess** | Pointer to **bool** | Indicates whether system error code is manual process or not | [optional] 

## Methods

### NewSystemErrorType

`func NewSystemErrorType() *SystemErrorType`

NewSystemErrorType instantiates a new SystemErrorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemErrorTypeWithDefaults

`func NewSystemErrorTypeWithDefaults() *SystemErrorType`

NewSystemErrorTypeWithDefaults instantiates a new SystemErrorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorCode

`func (o *SystemErrorType) GetErrorCode() string`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *SystemErrorType) GetErrorCodeOk() (*string, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *SystemErrorType) SetErrorCode(v string)`

SetErrorCode sets ErrorCode field to given value.

### HasErrorCode

`func (o *SystemErrorType) HasErrorCode() bool`

HasErrorCode returns a boolean if a field has been set.

### GetErrorDescription

`func (o *SystemErrorType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *SystemErrorType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *SystemErrorType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *SystemErrorType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetErrorPrefix

`func (o *SystemErrorType) GetErrorPrefix() string`

GetErrorPrefix returns the ErrorPrefix field if non-nil, zero value otherwise.

### GetErrorPrefixOk

`func (o *SystemErrorType) GetErrorPrefixOk() (*string, bool)`

GetErrorPrefixOk returns a tuple with the ErrorPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorPrefix

`func (o *SystemErrorType) SetErrorPrefix(v string)`

SetErrorPrefix sets ErrorPrefix field to given value.

### HasErrorPrefix

`func (o *SystemErrorType) HasErrorPrefix() bool`

HasErrorPrefix returns a boolean if a field has been set.

### GetErrorSuffix

`func (o *SystemErrorType) GetErrorSuffix() string`

GetErrorSuffix returns the ErrorSuffix field if non-nil, zero value otherwise.

### GetErrorSuffixOk

`func (o *SystemErrorType) GetErrorSuffixOk() (*string, bool)`

GetErrorSuffixOk returns a tuple with the ErrorSuffix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorSuffix

`func (o *SystemErrorType) SetErrorSuffix(v string)`

SetErrorSuffix sets ErrorSuffix field to given value.

### HasErrorSuffix

`func (o *SystemErrorType) HasErrorSuffix() bool`

HasErrorSuffix returns a boolean if a field has been set.

### GetBookingResponse

`func (o *SystemErrorType) GetBookingResponse() SystemErrorBookingResponseType`

GetBookingResponse returns the BookingResponse field if non-nil, zero value otherwise.

### GetBookingResponseOk

`func (o *SystemErrorType) GetBookingResponseOk() (*SystemErrorBookingResponseType, bool)`

GetBookingResponseOk returns a tuple with the BookingResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingResponse

`func (o *SystemErrorType) SetBookingResponse(v SystemErrorBookingResponseType)`

SetBookingResponse sets BookingResponse field to given value.

### HasBookingResponse

`func (o *SystemErrorType) HasBookingResponse() bool`

HasBookingResponse returns a boolean if a field has been set.

### GetDateRange

`func (o *SystemErrorType) GetDateRange() TimeSpanType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *SystemErrorType) GetDateRangeOk() (*TimeSpanType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *SystemErrorType) SetDateRange(v TimeSpanType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *SystemErrorType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetManualProcess

`func (o *SystemErrorType) GetManualProcess() bool`

GetManualProcess returns the ManualProcess field if non-nil, zero value otherwise.

### GetManualProcessOk

`func (o *SystemErrorType) GetManualProcessOk() (*bool, bool)`

GetManualProcessOk returns a tuple with the ManualProcess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualProcess

`func (o *SystemErrorType) SetManualProcess(v bool)`

SetManualProcess sets ManualProcess field to given value.

### HasManualProcess

`func (o *SystemErrorType) HasManualProcess() bool`

HasManualProcess returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


