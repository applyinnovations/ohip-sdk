# HousekeepingTaskSheetRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Specifies the hotel code of the housekeeping room | [optional] 
**Room** | Pointer to **string** | Specifies the housekeeping room code | [optional] 
**RoomType** | Pointer to **string** | Specifies the housekeeping room type | [optional] 
**Building** | Pointer to **string** | Specifies the building to which the housekeeping room is mapped to. This element will be used only if the BUILDINGS parameter is active. | [optional] 
**Floor** | Pointer to **string** | Specifies the floor to which the housekeeping room is mapped to | [optional] 
**DaySectionCode** | Pointer to **string** | Specifies the day section code. This element will be used only if the HOUSEKEEPING_SECTIONS parameter is active. | [optional] 
**EveningSectionCode** | Pointer to **string** | Specifies the evening section code. This element will be used only if the HOUSEKEEPING_SECTIONS parameter is active. | [optional] 
**RuleCredit** | Pointer to [**HousekeepingTaskSheetRoomTypeRuleCredit**](HousekeepingTaskSheetRoomTypeRuleCredit.md) |  | [optional] 
**RoomCredit** | Pointer to [**[]HousekeepingCreditsType**](HousekeepingCreditsType.md) | This element will be used only if the value of HOUSEKEEPING_CREDITS setting is set to ROOM. Room credits can be defined for Stayover, Turndown, Departure and Pickup. For Turndown Credits to be used, the TURNDOWN parameter should be active and HOUSEKEEPING_CREDITS setting should be set to a value other than NONE. For Pickup Credits to be used, the PICKUP_STATUS parameter should be active. | [optional] 
**Sequence** | Pointer to **int32** | Specifies the sorting sequence number for the housekeeping room | [optional] 

## Methods

### NewHousekeepingTaskSheetRoomType

`func NewHousekeepingTaskSheetRoomType() *HousekeepingTaskSheetRoomType`

NewHousekeepingTaskSheetRoomType instantiates a new HousekeepingTaskSheetRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskSheetRoomTypeWithDefaults

`func NewHousekeepingTaskSheetRoomTypeWithDefaults() *HousekeepingTaskSheetRoomType`

NewHousekeepingTaskSheetRoomTypeWithDefaults instantiates a new HousekeepingTaskSheetRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HousekeepingTaskSheetRoomType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingTaskSheetRoomType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingTaskSheetRoomType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingTaskSheetRoomType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoom

`func (o *HousekeepingTaskSheetRoomType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *HousekeepingTaskSheetRoomType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *HousekeepingTaskSheetRoomType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *HousekeepingTaskSheetRoomType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetRoomType

`func (o *HousekeepingTaskSheetRoomType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *HousekeepingTaskSheetRoomType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *HousekeepingTaskSheetRoomType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *HousekeepingTaskSheetRoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetBuilding

`func (o *HousekeepingTaskSheetRoomType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *HousekeepingTaskSheetRoomType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *HousekeepingTaskSheetRoomType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *HousekeepingTaskSheetRoomType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetFloor

`func (o *HousekeepingTaskSheetRoomType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *HousekeepingTaskSheetRoomType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *HousekeepingTaskSheetRoomType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *HousekeepingTaskSheetRoomType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetDaySectionCode

`func (o *HousekeepingTaskSheetRoomType) GetDaySectionCode() string`

GetDaySectionCode returns the DaySectionCode field if non-nil, zero value otherwise.

### GetDaySectionCodeOk

`func (o *HousekeepingTaskSheetRoomType) GetDaySectionCodeOk() (*string, bool)`

GetDaySectionCodeOk returns a tuple with the DaySectionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaySectionCode

`func (o *HousekeepingTaskSheetRoomType) SetDaySectionCode(v string)`

SetDaySectionCode sets DaySectionCode field to given value.

### HasDaySectionCode

`func (o *HousekeepingTaskSheetRoomType) HasDaySectionCode() bool`

HasDaySectionCode returns a boolean if a field has been set.

### GetEveningSectionCode

`func (o *HousekeepingTaskSheetRoomType) GetEveningSectionCode() string`

GetEveningSectionCode returns the EveningSectionCode field if non-nil, zero value otherwise.

### GetEveningSectionCodeOk

`func (o *HousekeepingTaskSheetRoomType) GetEveningSectionCodeOk() (*string, bool)`

GetEveningSectionCodeOk returns a tuple with the EveningSectionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEveningSectionCode

`func (o *HousekeepingTaskSheetRoomType) SetEveningSectionCode(v string)`

SetEveningSectionCode sets EveningSectionCode field to given value.

### HasEveningSectionCode

`func (o *HousekeepingTaskSheetRoomType) HasEveningSectionCode() bool`

HasEveningSectionCode returns a boolean if a field has been set.

### GetRuleCredit

`func (o *HousekeepingTaskSheetRoomType) GetRuleCredit() HousekeepingTaskSheetRoomTypeRuleCredit`

GetRuleCredit returns the RuleCredit field if non-nil, zero value otherwise.

### GetRuleCreditOk

`func (o *HousekeepingTaskSheetRoomType) GetRuleCreditOk() (*HousekeepingTaskSheetRoomTypeRuleCredit, bool)`

GetRuleCreditOk returns a tuple with the RuleCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCredit

`func (o *HousekeepingTaskSheetRoomType) SetRuleCredit(v HousekeepingTaskSheetRoomTypeRuleCredit)`

SetRuleCredit sets RuleCredit field to given value.

### HasRuleCredit

`func (o *HousekeepingTaskSheetRoomType) HasRuleCredit() bool`

HasRuleCredit returns a boolean if a field has been set.

### GetRoomCredit

`func (o *HousekeepingTaskSheetRoomType) GetRoomCredit() []HousekeepingCreditsType`

GetRoomCredit returns the RoomCredit field if non-nil, zero value otherwise.

### GetRoomCreditOk

`func (o *HousekeepingTaskSheetRoomType) GetRoomCreditOk() (*[]HousekeepingCreditsType, bool)`

GetRoomCreditOk returns a tuple with the RoomCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCredit

`func (o *HousekeepingTaskSheetRoomType) SetRoomCredit(v []HousekeepingCreditsType)`

SetRoomCredit sets RoomCredit field to given value.

### HasRoomCredit

`func (o *HousekeepingTaskSheetRoomType) HasRoomCredit() bool`

HasRoomCredit returns a boolean if a field has been set.

### GetSequence

`func (o *HousekeepingTaskSheetRoomType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *HousekeepingTaskSheetRoomType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *HousekeepingTaskSheetRoomType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *HousekeepingTaskSheetRoomType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


