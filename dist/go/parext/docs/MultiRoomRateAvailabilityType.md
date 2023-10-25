# MultiRoomRateAvailabilityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Unique ID of the hotel where availability will be searched for. | [optional] 
**RoomStays** | Pointer to [**[]MultiRoomRateStayType**](MultiRoomRateStayType.md) | Collection of available room rate combinations. | [optional] 

## Methods

### NewMultiRoomRateAvailabilityType

`func NewMultiRoomRateAvailabilityType() *MultiRoomRateAvailabilityType`

NewMultiRoomRateAvailabilityType instantiates a new MultiRoomRateAvailabilityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiRoomRateAvailabilityTypeWithDefaults

`func NewMultiRoomRateAvailabilityTypeWithDefaults() *MultiRoomRateAvailabilityType`

NewMultiRoomRateAvailabilityTypeWithDefaults instantiates a new MultiRoomRateAvailabilityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *MultiRoomRateAvailabilityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MultiRoomRateAvailabilityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MultiRoomRateAvailabilityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MultiRoomRateAvailabilityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomStays

`func (o *MultiRoomRateAvailabilityType) GetRoomStays() []MultiRoomRateStayType`

GetRoomStays returns the RoomStays field if non-nil, zero value otherwise.

### GetRoomStaysOk

`func (o *MultiRoomRateAvailabilityType) GetRoomStaysOk() (*[]MultiRoomRateStayType, bool)`

GetRoomStaysOk returns a tuple with the RoomStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStays

`func (o *MultiRoomRateAvailabilityType) SetRoomStays(v []MultiRoomRateStayType)`

SetRoomStays sets RoomStays field to given value.

### HasRoomStays

`func (o *MultiRoomRateAvailabilityType) HasRoomStays() bool`

HasRoomStays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


