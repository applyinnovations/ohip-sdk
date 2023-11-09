# RoomTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accessible** | Pointer to **bool** | Indicates if room type is accessible. | [optional] 
**ActiveDate** | Pointer to **string** | Active date of the room type. | [optional] 
**AutoCheckin** | Pointer to **bool** | Creates a new linked Reservation, and proceeds within check-in of the new reservation. | [optional] 
**AutoPopulate** | Pointer to **bool** | Room type is automatically attached when new rate codes are created. | [optional] 
**AutoRoomAssign** | Pointer to **bool** | Room number is automatically assigned when a reservation is made for this Room Type. | [optional] 
**BedType** | Pointer to **string** | Bed type of room type. | [optional] 
**Components** | Pointer to [**RoomTypeComponentsType**](RoomTypeComponentsType.md) |  | [optional] 
**DefaultOccupancy** | Pointer to **float32** | Default occupancy for the room type. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Features** | Pointer to [**RoomFeaturesType**](RoomFeaturesType.md) |  | [optional] 
**Generic** | Pointer to **bool** | Indicates room type is generic. | [optional] 
**HouseKeeping** | Pointer to **bool** | Room type shows in house keeping. | [optional] 
**Inactive** | Pointer to **bool** | Is Room type inactive? | [optional] 
**InfoURL** | Pointer to **string** | Room type info URL. | [optional] 
**Maintenance** | Pointer to **bool** | Indicates room type is available for maintenance request. | [optional] 
**MaxAdults** | Pointer to **int32** | Maximum Adults for the room type. | [optional] 
**MaxChildren** | Pointer to **int32** | Maximum Children for the room type. | [optional] 
**MaximumOccupancy** | Pointer to **int32** | Maximum occupancy for the room type. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. | [optional] 
**MinimumOccupancy** | Pointer to **int32** | Minimum occupancy for the room type. | [optional] 
**NewRoomType** | Pointer to **string** | New Room type code. (Used in change template room type operation) | [optional] 
**NumberOfRooms** | Pointer to **int32** | Number of rooms for this room type. | [optional] 
**Pseudo** | Pointer to **bool** | Indicates if room type is pseudo. | [optional] 
**RateFloor** | Pointer to **float32** | This value will control the minimum amount that the selected room type can be sold | [optional] 
**RoomClass** | Pointer to **string** | Room class for the room type code. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**SellSequence** | Pointer to **float32** | Indicates room types sell sequence. | [optional] 
**SendToInterface** | Pointer to **bool** | Indicates room type is sent to interface. | [optional] 
**ShortDescription** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**SmokingPreference** | Pointer to **string** | Specifies the smoking preference for this room type. I.E. SM, NS. | [optional] 
**Suite** | Pointer to [**RoomTypeTypeSuite**](RoomTypeTypeSuite.md) |  | [optional] 
**YieldCategory** | Pointer to **string** | Yield category for this room type (Available when a yield integration add-on license is active and when room type is Yieldable.) | [optional] 
**YieldStatus** | Pointer to [**RoomTypeYieldableType**](RoomTypeYieldableType.md) |  | [optional] 

## Methods

### NewRoomTypeType

`func NewRoomTypeType() *RoomTypeType`

NewRoomTypeType instantiates a new RoomTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeTypeWithDefaults

`func NewRoomTypeTypeWithDefaults() *RoomTypeType`

NewRoomTypeTypeWithDefaults instantiates a new RoomTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessible

`func (o *RoomTypeType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *RoomTypeType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *RoomTypeType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *RoomTypeType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetActiveDate

`func (o *RoomTypeType) GetActiveDate() string`

GetActiveDate returns the ActiveDate field if non-nil, zero value otherwise.

### GetActiveDateOk

`func (o *RoomTypeType) GetActiveDateOk() (*string, bool)`

GetActiveDateOk returns a tuple with the ActiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveDate

`func (o *RoomTypeType) SetActiveDate(v string)`

SetActiveDate sets ActiveDate field to given value.

### HasActiveDate

`func (o *RoomTypeType) HasActiveDate() bool`

HasActiveDate returns a boolean if a field has been set.

### GetAutoCheckin

`func (o *RoomTypeType) GetAutoCheckin() bool`

GetAutoCheckin returns the AutoCheckin field if non-nil, zero value otherwise.

### GetAutoCheckinOk

`func (o *RoomTypeType) GetAutoCheckinOk() (*bool, bool)`

GetAutoCheckinOk returns a tuple with the AutoCheckin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCheckin

`func (o *RoomTypeType) SetAutoCheckin(v bool)`

SetAutoCheckin sets AutoCheckin field to given value.

### HasAutoCheckin

`func (o *RoomTypeType) HasAutoCheckin() bool`

HasAutoCheckin returns a boolean if a field has been set.

### GetAutoPopulate

`func (o *RoomTypeType) GetAutoPopulate() bool`

GetAutoPopulate returns the AutoPopulate field if non-nil, zero value otherwise.

### GetAutoPopulateOk

`func (o *RoomTypeType) GetAutoPopulateOk() (*bool, bool)`

GetAutoPopulateOk returns a tuple with the AutoPopulate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoPopulate

`func (o *RoomTypeType) SetAutoPopulate(v bool)`

SetAutoPopulate sets AutoPopulate field to given value.

### HasAutoPopulate

`func (o *RoomTypeType) HasAutoPopulate() bool`

HasAutoPopulate returns a boolean if a field has been set.

### GetAutoRoomAssign

`func (o *RoomTypeType) GetAutoRoomAssign() bool`

GetAutoRoomAssign returns the AutoRoomAssign field if non-nil, zero value otherwise.

### GetAutoRoomAssignOk

`func (o *RoomTypeType) GetAutoRoomAssignOk() (*bool, bool)`

GetAutoRoomAssignOk returns a tuple with the AutoRoomAssign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRoomAssign

`func (o *RoomTypeType) SetAutoRoomAssign(v bool)`

SetAutoRoomAssign sets AutoRoomAssign field to given value.

### HasAutoRoomAssign

`func (o *RoomTypeType) HasAutoRoomAssign() bool`

HasAutoRoomAssign returns a boolean if a field has been set.

### GetBedType

`func (o *RoomTypeType) GetBedType() string`

GetBedType returns the BedType field if non-nil, zero value otherwise.

### GetBedTypeOk

`func (o *RoomTypeType) GetBedTypeOk() (*string, bool)`

GetBedTypeOk returns a tuple with the BedType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedType

`func (o *RoomTypeType) SetBedType(v string)`

SetBedType sets BedType field to given value.

### HasBedType

`func (o *RoomTypeType) HasBedType() bool`

HasBedType returns a boolean if a field has been set.

### GetComponents

`func (o *RoomTypeType) GetComponents() RoomTypeComponentsType`

GetComponents returns the Components field if non-nil, zero value otherwise.

### GetComponentsOk

`func (o *RoomTypeType) GetComponentsOk() (*RoomTypeComponentsType, bool)`

GetComponentsOk returns a tuple with the Components field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponents

`func (o *RoomTypeType) SetComponents(v RoomTypeComponentsType)`

SetComponents sets Components field to given value.

### HasComponents

`func (o *RoomTypeType) HasComponents() bool`

HasComponents returns a boolean if a field has been set.

### GetDefaultOccupancy

`func (o *RoomTypeType) GetDefaultOccupancy() float32`

GetDefaultOccupancy returns the DefaultOccupancy field if non-nil, zero value otherwise.

### GetDefaultOccupancyOk

`func (o *RoomTypeType) GetDefaultOccupancyOk() (*float32, bool)`

GetDefaultOccupancyOk returns a tuple with the DefaultOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultOccupancy

`func (o *RoomTypeType) SetDefaultOccupancy(v float32)`

SetDefaultOccupancy sets DefaultOccupancy field to given value.

### HasDefaultOccupancy

`func (o *RoomTypeType) HasDefaultOccupancy() bool`

HasDefaultOccupancy returns a boolean if a field has been set.

### GetDescription

`func (o *RoomTypeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomTypeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomTypeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomTypeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFeatures

`func (o *RoomTypeType) GetFeatures() RoomFeaturesType`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *RoomTypeType) GetFeaturesOk() (*RoomFeaturesType, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *RoomTypeType) SetFeatures(v RoomFeaturesType)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *RoomTypeType) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetGeneric

`func (o *RoomTypeType) GetGeneric() bool`

GetGeneric returns the Generic field if non-nil, zero value otherwise.

### GetGenericOk

`func (o *RoomTypeType) GetGenericOk() (*bool, bool)`

GetGenericOk returns a tuple with the Generic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneric

`func (o *RoomTypeType) SetGeneric(v bool)`

SetGeneric sets Generic field to given value.

### HasGeneric

`func (o *RoomTypeType) HasGeneric() bool`

HasGeneric returns a boolean if a field has been set.

### GetHouseKeeping

`func (o *RoomTypeType) GetHouseKeeping() bool`

GetHouseKeeping returns the HouseKeeping field if non-nil, zero value otherwise.

### GetHouseKeepingOk

`func (o *RoomTypeType) GetHouseKeepingOk() (*bool, bool)`

GetHouseKeepingOk returns a tuple with the HouseKeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseKeeping

`func (o *RoomTypeType) SetHouseKeeping(v bool)`

SetHouseKeeping sets HouseKeeping field to given value.

### HasHouseKeeping

`func (o *RoomTypeType) HasHouseKeeping() bool`

HasHouseKeeping returns a boolean if a field has been set.

### GetInactive

`func (o *RoomTypeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomTypeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomTypeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomTypeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetInfoURL

`func (o *RoomTypeType) GetInfoURL() string`

GetInfoURL returns the InfoURL field if non-nil, zero value otherwise.

### GetInfoURLOk

`func (o *RoomTypeType) GetInfoURLOk() (*string, bool)`

GetInfoURLOk returns a tuple with the InfoURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfoURL

`func (o *RoomTypeType) SetInfoURL(v string)`

SetInfoURL sets InfoURL field to given value.

### HasInfoURL

`func (o *RoomTypeType) HasInfoURL() bool`

HasInfoURL returns a boolean if a field has been set.

### GetMaintenance

`func (o *RoomTypeType) GetMaintenance() bool`

GetMaintenance returns the Maintenance field if non-nil, zero value otherwise.

### GetMaintenanceOk

`func (o *RoomTypeType) GetMaintenanceOk() (*bool, bool)`

GetMaintenanceOk returns a tuple with the Maintenance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintenance

`func (o *RoomTypeType) SetMaintenance(v bool)`

SetMaintenance sets Maintenance field to given value.

### HasMaintenance

`func (o *RoomTypeType) HasMaintenance() bool`

HasMaintenance returns a boolean if a field has been set.

### GetMaxAdults

`func (o *RoomTypeType) GetMaxAdults() int32`

GetMaxAdults returns the MaxAdults field if non-nil, zero value otherwise.

### GetMaxAdultsOk

`func (o *RoomTypeType) GetMaxAdultsOk() (*int32, bool)`

GetMaxAdultsOk returns a tuple with the MaxAdults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAdults

`func (o *RoomTypeType) SetMaxAdults(v int32)`

SetMaxAdults sets MaxAdults field to given value.

### HasMaxAdults

`func (o *RoomTypeType) HasMaxAdults() bool`

HasMaxAdults returns a boolean if a field has been set.

### GetMaxChildren

`func (o *RoomTypeType) GetMaxChildren() int32`

GetMaxChildren returns the MaxChildren field if non-nil, zero value otherwise.

### GetMaxChildrenOk

`func (o *RoomTypeType) GetMaxChildrenOk() (*int32, bool)`

GetMaxChildrenOk returns a tuple with the MaxChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxChildren

`func (o *RoomTypeType) SetMaxChildren(v int32)`

SetMaxChildren sets MaxChildren field to given value.

### HasMaxChildren

`func (o *RoomTypeType) HasMaxChildren() bool`

HasMaxChildren returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *RoomTypeType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *RoomTypeType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *RoomTypeType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *RoomTypeType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *RoomTypeType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *RoomTypeType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *RoomTypeType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *RoomTypeType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetMinimumOccupancy

`func (o *RoomTypeType) GetMinimumOccupancy() int32`

GetMinimumOccupancy returns the MinimumOccupancy field if non-nil, zero value otherwise.

### GetMinimumOccupancyOk

`func (o *RoomTypeType) GetMinimumOccupancyOk() (*int32, bool)`

GetMinimumOccupancyOk returns a tuple with the MinimumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOccupancy

`func (o *RoomTypeType) SetMinimumOccupancy(v int32)`

SetMinimumOccupancy sets MinimumOccupancy field to given value.

### HasMinimumOccupancy

`func (o *RoomTypeType) HasMinimumOccupancy() bool`

HasMinimumOccupancy returns a boolean if a field has been set.

### GetNewRoomType

`func (o *RoomTypeType) GetNewRoomType() string`

GetNewRoomType returns the NewRoomType field if non-nil, zero value otherwise.

### GetNewRoomTypeOk

`func (o *RoomTypeType) GetNewRoomTypeOk() (*string, bool)`

GetNewRoomTypeOk returns a tuple with the NewRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRoomType

`func (o *RoomTypeType) SetNewRoomType(v string)`

SetNewRoomType sets NewRoomType field to given value.

### HasNewRoomType

`func (o *RoomTypeType) HasNewRoomType() bool`

HasNewRoomType returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *RoomTypeType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *RoomTypeType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *RoomTypeType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *RoomTypeType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetPseudo

`func (o *RoomTypeType) GetPseudo() bool`

GetPseudo returns the Pseudo field if non-nil, zero value otherwise.

### GetPseudoOk

`func (o *RoomTypeType) GetPseudoOk() (*bool, bool)`

GetPseudoOk returns a tuple with the Pseudo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudo

`func (o *RoomTypeType) SetPseudo(v bool)`

SetPseudo sets Pseudo field to given value.

### HasPseudo

`func (o *RoomTypeType) HasPseudo() bool`

HasPseudo returns a boolean if a field has been set.

### GetRateFloor

`func (o *RoomTypeType) GetRateFloor() float32`

GetRateFloor returns the RateFloor field if non-nil, zero value otherwise.

### GetRateFloorOk

`func (o *RoomTypeType) GetRateFloorOk() (*float32, bool)`

GetRateFloorOk returns a tuple with the RateFloor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateFloor

`func (o *RoomTypeType) SetRateFloor(v float32)`

SetRateFloor sets RateFloor field to given value.

### HasRateFloor

`func (o *RoomTypeType) HasRateFloor() bool`

HasRateFloor returns a boolean if a field has been set.

### GetRoomClass

`func (o *RoomTypeType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomTypeType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomTypeType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomTypeType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomTypeType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypeType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypeType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypeType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSellSequence

`func (o *RoomTypeType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *RoomTypeType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *RoomTypeType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *RoomTypeType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetSendToInterface

`func (o *RoomTypeType) GetSendToInterface() bool`

GetSendToInterface returns the SendToInterface field if non-nil, zero value otherwise.

### GetSendToInterfaceOk

`func (o *RoomTypeType) GetSendToInterfaceOk() (*bool, bool)`

GetSendToInterfaceOk returns a tuple with the SendToInterface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendToInterface

`func (o *RoomTypeType) SetSendToInterface(v bool)`

SetSendToInterface sets SendToInterface field to given value.

### HasSendToInterface

`func (o *RoomTypeType) HasSendToInterface() bool`

HasSendToInterface returns a boolean if a field has been set.

### GetShortDescription

`func (o *RoomTypeType) GetShortDescription() TranslationTextType2000`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *RoomTypeType) GetShortDescriptionOk() (*TranslationTextType2000, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *RoomTypeType) SetShortDescription(v TranslationTextType2000)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *RoomTypeType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *RoomTypeType) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *RoomTypeType) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *RoomTypeType) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *RoomTypeType) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSuite

`func (o *RoomTypeType) GetSuite() RoomTypeTypeSuite`

GetSuite returns the Suite field if non-nil, zero value otherwise.

### GetSuiteOk

`func (o *RoomTypeType) GetSuiteOk() (*RoomTypeTypeSuite, bool)`

GetSuiteOk returns a tuple with the Suite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuite

`func (o *RoomTypeType) SetSuite(v RoomTypeTypeSuite)`

SetSuite sets Suite field to given value.

### HasSuite

`func (o *RoomTypeType) HasSuite() bool`

HasSuite returns a boolean if a field has been set.

### GetYieldCategory

`func (o *RoomTypeType) GetYieldCategory() string`

GetYieldCategory returns the YieldCategory field if non-nil, zero value otherwise.

### GetYieldCategoryOk

`func (o *RoomTypeType) GetYieldCategoryOk() (*string, bool)`

GetYieldCategoryOk returns a tuple with the YieldCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldCategory

`func (o *RoomTypeType) SetYieldCategory(v string)`

SetYieldCategory sets YieldCategory field to given value.

### HasYieldCategory

`func (o *RoomTypeType) HasYieldCategory() bool`

HasYieldCategory returns a boolean if a field has been set.

### GetYieldStatus

`func (o *RoomTypeType) GetYieldStatus() RoomTypeYieldableType`

GetYieldStatus returns the YieldStatus field if non-nil, zero value otherwise.

### GetYieldStatusOk

`func (o *RoomTypeType) GetYieldStatusOk() (*RoomTypeYieldableType, bool)`

GetYieldStatusOk returns a tuple with the YieldStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldStatus

`func (o *RoomTypeType) SetYieldStatus(v RoomTypeYieldableType)`

SetYieldStatus sets YieldStatus field to given value.

### HasYieldStatus

`func (o *RoomTypeType) HasYieldStatus() bool`

HasYieldStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


