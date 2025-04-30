# BookingStatusHistoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sequence** | Pointer to **int32** | Number indicating the sequence of status change. | [optional] 
**BookingStatus** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ModifyDateTime** | Pointer to **string** | Date and time of the status change. | [optional] 
**ModifierId** | Pointer to **string** | User who modified the status. | [optional] 

## Methods

### NewBookingStatusHistoryType

`func NewBookingStatusHistoryType() *BookingStatusHistoryType`

NewBookingStatusHistoryType instantiates a new BookingStatusHistoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookingStatusHistoryTypeWithDefaults

`func NewBookingStatusHistoryTypeWithDefaults() *BookingStatusHistoryType`

NewBookingStatusHistoryTypeWithDefaults instantiates a new BookingStatusHistoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSequence

`func (o *BookingStatusHistoryType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *BookingStatusHistoryType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *BookingStatusHistoryType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *BookingStatusHistoryType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetBookingStatus

`func (o *BookingStatusHistoryType) GetBookingStatus() CodeDescriptionType`

GetBookingStatus returns the BookingStatus field if non-nil, zero value otherwise.

### GetBookingStatusOk

`func (o *BookingStatusHistoryType) GetBookingStatusOk() (*CodeDescriptionType, bool)`

GetBookingStatusOk returns a tuple with the BookingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingStatus

`func (o *BookingStatusHistoryType) SetBookingStatus(v CodeDescriptionType)`

SetBookingStatus sets BookingStatus field to given value.

### HasBookingStatus

`func (o *BookingStatusHistoryType) HasBookingStatus() bool`

HasBookingStatus returns a boolean if a field has been set.

### GetModifyDateTime

`func (o *BookingStatusHistoryType) GetModifyDateTime() string`

GetModifyDateTime returns the ModifyDateTime field if non-nil, zero value otherwise.

### GetModifyDateTimeOk

`func (o *BookingStatusHistoryType) GetModifyDateTimeOk() (*string, bool)`

GetModifyDateTimeOk returns a tuple with the ModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifyDateTime

`func (o *BookingStatusHistoryType) SetModifyDateTime(v string)`

SetModifyDateTime sets ModifyDateTime field to given value.

### HasModifyDateTime

`func (o *BookingStatusHistoryType) HasModifyDateTime() bool`

HasModifyDateTime returns a boolean if a field has been set.

### GetModifierId

`func (o *BookingStatusHistoryType) GetModifierId() string`

GetModifierId returns the ModifierId field if non-nil, zero value otherwise.

### GetModifierIdOk

`func (o *BookingStatusHistoryType) GetModifierIdOk() (*string, bool)`

GetModifierIdOk returns a tuple with the ModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifierId

`func (o *BookingStatusHistoryType) SetModifierId(v string)`

SetModifierId sets ModifierId field to given value.

### HasModifierId

`func (o *BookingStatusHistoryType) HasModifierId() bool`

HasModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


