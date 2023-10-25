# MultiRoomRateAvailabilityResponseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelAvailability** | Pointer to [**[]MultiRoomRateAvailabilityType**](MultiRoomRateAvailabilityType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMultiRoomRateAvailabilityResponseType

`func NewMultiRoomRateAvailabilityResponseType() *MultiRoomRateAvailabilityResponseType`

NewMultiRoomRateAvailabilityResponseType instantiates a new MultiRoomRateAvailabilityResponseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiRoomRateAvailabilityResponseTypeWithDefaults

`func NewMultiRoomRateAvailabilityResponseTypeWithDefaults() *MultiRoomRateAvailabilityResponseType`

NewMultiRoomRateAvailabilityResponseTypeWithDefaults instantiates a new MultiRoomRateAvailabilityResponseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelAvailability

`func (o *MultiRoomRateAvailabilityResponseType) GetHotelAvailability() []MultiRoomRateAvailabilityType`

GetHotelAvailability returns the HotelAvailability field if non-nil, zero value otherwise.

### GetHotelAvailabilityOk

`func (o *MultiRoomRateAvailabilityResponseType) GetHotelAvailabilityOk() (*[]MultiRoomRateAvailabilityType, bool)`

GetHotelAvailabilityOk returns a tuple with the HotelAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAvailability

`func (o *MultiRoomRateAvailabilityResponseType) SetHotelAvailability(v []MultiRoomRateAvailabilityType)`

SetHotelAvailability sets HotelAvailability field to given value.

### HasHotelAvailability

`func (o *MultiRoomRateAvailabilityResponseType) HasHotelAvailability() bool`

HasHotelAvailability returns a boolean if a field has been set.

### GetWarnings

`func (o *MultiRoomRateAvailabilityResponseType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MultiRoomRateAvailabilityResponseType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MultiRoomRateAvailabilityResponseType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MultiRoomRateAvailabilityResponseType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


