# PolicyDeadlineType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AbsoluteDeadline** | Pointer to **string** | Defines the absolute deadline. Either this or the offset attributes may be used. | [optional] 
**OffsetFromArrival** | Pointer to **int32** | The number of days before arrival that allows cancellation without penalties. | [optional] 
**OffsetDropTime** | Pointer to **string** | Time on offset day the cancellation penalties applies. | [optional] 
**OffsetFromBookingDate** | Pointer to **int32** | The number of days after booking deposit must be paid. | [optional] 

## Methods

### NewPolicyDeadlineType

`func NewPolicyDeadlineType() *PolicyDeadlineType`

NewPolicyDeadlineType instantiates a new PolicyDeadlineType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyDeadlineTypeWithDefaults

`func NewPolicyDeadlineTypeWithDefaults() *PolicyDeadlineType`

NewPolicyDeadlineTypeWithDefaults instantiates a new PolicyDeadlineType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAbsoluteDeadline

`func (o *PolicyDeadlineType) GetAbsoluteDeadline() string`

GetAbsoluteDeadline returns the AbsoluteDeadline field if non-nil, zero value otherwise.

### GetAbsoluteDeadlineOk

`func (o *PolicyDeadlineType) GetAbsoluteDeadlineOk() (*string, bool)`

GetAbsoluteDeadlineOk returns a tuple with the AbsoluteDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbsoluteDeadline

`func (o *PolicyDeadlineType) SetAbsoluteDeadline(v string)`

SetAbsoluteDeadline sets AbsoluteDeadline field to given value.

### HasAbsoluteDeadline

`func (o *PolicyDeadlineType) HasAbsoluteDeadline() bool`

HasAbsoluteDeadline returns a boolean if a field has been set.

### GetOffsetFromArrival

`func (o *PolicyDeadlineType) GetOffsetFromArrival() int32`

GetOffsetFromArrival returns the OffsetFromArrival field if non-nil, zero value otherwise.

### GetOffsetFromArrivalOk

`func (o *PolicyDeadlineType) GetOffsetFromArrivalOk() (*int32, bool)`

GetOffsetFromArrivalOk returns a tuple with the OffsetFromArrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetFromArrival

`func (o *PolicyDeadlineType) SetOffsetFromArrival(v int32)`

SetOffsetFromArrival sets OffsetFromArrival field to given value.

### HasOffsetFromArrival

`func (o *PolicyDeadlineType) HasOffsetFromArrival() bool`

HasOffsetFromArrival returns a boolean if a field has been set.

### GetOffsetDropTime

`func (o *PolicyDeadlineType) GetOffsetDropTime() string`

GetOffsetDropTime returns the OffsetDropTime field if non-nil, zero value otherwise.

### GetOffsetDropTimeOk

`func (o *PolicyDeadlineType) GetOffsetDropTimeOk() (*string, bool)`

GetOffsetDropTimeOk returns a tuple with the OffsetDropTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetDropTime

`func (o *PolicyDeadlineType) SetOffsetDropTime(v string)`

SetOffsetDropTime sets OffsetDropTime field to given value.

### HasOffsetDropTime

`func (o *PolicyDeadlineType) HasOffsetDropTime() bool`

HasOffsetDropTime returns a boolean if a field has been set.

### GetOffsetFromBookingDate

`func (o *PolicyDeadlineType) GetOffsetFromBookingDate() int32`

GetOffsetFromBookingDate returns the OffsetFromBookingDate field if non-nil, zero value otherwise.

### GetOffsetFromBookingDateOk

`func (o *PolicyDeadlineType) GetOffsetFromBookingDateOk() (*int32, bool)`

GetOffsetFromBookingDateOk returns a tuple with the OffsetFromBookingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetFromBookingDate

`func (o *PolicyDeadlineType) SetOffsetFromBookingDate(v int32)`

SetOffsetFromBookingDate sets OffsetFromBookingDate field to given value.

### HasOffsetFromBookingDate

`func (o *PolicyDeadlineType) HasOffsetFromBookingDate() bool`

HasOffsetFromBookingDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


