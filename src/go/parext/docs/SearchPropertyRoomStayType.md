# SearchPropertyRoomStayType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Availability** | Pointer to [**HotelAvailabilityStatus**](HotelAvailabilityStatus.md) |  | [optional] 
**MinimumRate** | Pointer to [**OfferTotalType**](OfferTotalType.md) |  | [optional] 
**PropertyInfo** | Pointer to [**PropertySearchPropertyInfo**](PropertySearchPropertyInfo.md) |  | [optional] 
**RoomClass** | Pointer to **string** |  | [optional] 
**RoomTags** | Pointer to [**[]RoomTagType**](RoomTagType.md) | The collection of tag and respective room type for which minimum rate is returned. | [optional] 

## Methods

### NewSearchPropertyRoomStayType

`func NewSearchPropertyRoomStayType() *SearchPropertyRoomStayType`

NewSearchPropertyRoomStayType instantiates a new SearchPropertyRoomStayType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchPropertyRoomStayTypeWithDefaults

`func NewSearchPropertyRoomStayTypeWithDefaults() *SearchPropertyRoomStayType`

NewSearchPropertyRoomStayTypeWithDefaults instantiates a new SearchPropertyRoomStayType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailability

`func (o *SearchPropertyRoomStayType) GetAvailability() HotelAvailabilityStatus`

GetAvailability returns the Availability field if non-nil, zero value otherwise.

### GetAvailabilityOk

`func (o *SearchPropertyRoomStayType) GetAvailabilityOk() (*HotelAvailabilityStatus, bool)`

GetAvailabilityOk returns a tuple with the Availability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailability

`func (o *SearchPropertyRoomStayType) SetAvailability(v HotelAvailabilityStatus)`

SetAvailability sets Availability field to given value.

### HasAvailability

`func (o *SearchPropertyRoomStayType) HasAvailability() bool`

HasAvailability returns a boolean if a field has been set.

### GetMinimumRate

`func (o *SearchPropertyRoomStayType) GetMinimumRate() OfferTotalType`

GetMinimumRate returns the MinimumRate field if non-nil, zero value otherwise.

### GetMinimumRateOk

`func (o *SearchPropertyRoomStayType) GetMinimumRateOk() (*OfferTotalType, bool)`

GetMinimumRateOk returns a tuple with the MinimumRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumRate

`func (o *SearchPropertyRoomStayType) SetMinimumRate(v OfferTotalType)`

SetMinimumRate sets MinimumRate field to given value.

### HasMinimumRate

`func (o *SearchPropertyRoomStayType) HasMinimumRate() bool`

HasMinimumRate returns a boolean if a field has been set.

### GetPropertyInfo

`func (o *SearchPropertyRoomStayType) GetPropertyInfo() PropertySearchPropertyInfo`

GetPropertyInfo returns the PropertyInfo field if non-nil, zero value otherwise.

### GetPropertyInfoOk

`func (o *SearchPropertyRoomStayType) GetPropertyInfoOk() (*PropertySearchPropertyInfo, bool)`

GetPropertyInfoOk returns a tuple with the PropertyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyInfo

`func (o *SearchPropertyRoomStayType) SetPropertyInfo(v PropertySearchPropertyInfo)`

SetPropertyInfo sets PropertyInfo field to given value.

### HasPropertyInfo

`func (o *SearchPropertyRoomStayType) HasPropertyInfo() bool`

HasPropertyInfo returns a boolean if a field has been set.

### GetRoomClass

`func (o *SearchPropertyRoomStayType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *SearchPropertyRoomStayType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *SearchPropertyRoomStayType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *SearchPropertyRoomStayType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomTags

`func (o *SearchPropertyRoomStayType) GetRoomTags() []RoomTagType`

GetRoomTags returns the RoomTags field if non-nil, zero value otherwise.

### GetRoomTagsOk

`func (o *SearchPropertyRoomStayType) GetRoomTagsOk() (*[]RoomTagType, bool)`

GetRoomTagsOk returns a tuple with the RoomTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTags

`func (o *SearchPropertyRoomStayType) SetRoomTags(v []RoomTagType)`

SetRoomTags sets RoomTags field to given value.

### HasRoomTags

`func (o *SearchPropertyRoomStayType) HasRoomTags() bool`

HasRoomTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


