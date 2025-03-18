# ChannelErrorsErrors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to [**[]SystemErrorType**](SystemErrorType.md) | Channel error details. | [optional] 
**BookingChannelCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 

## Methods

### NewChannelErrorsErrors

`func NewChannelErrorsErrors() *ChannelErrorsErrors`

NewChannelErrorsErrors instantiates a new ChannelErrorsErrors object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelErrorsErrorsWithDefaults

`func NewChannelErrorsErrorsWithDefaults() *ChannelErrorsErrors`

NewChannelErrorsErrorsWithDefaults instantiates a new ChannelErrorsErrors object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ChannelErrorsErrors) GetError() []SystemErrorType`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ChannelErrorsErrors) GetErrorOk() (*[]SystemErrorType, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ChannelErrorsErrors) SetError(v []SystemErrorType)`

SetError sets Error field to given value.

### HasError

`func (o *ChannelErrorsErrors) HasError() bool`

HasError returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelErrorsErrors) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelErrorsErrors) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelErrorsErrors) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelErrorsErrors) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


