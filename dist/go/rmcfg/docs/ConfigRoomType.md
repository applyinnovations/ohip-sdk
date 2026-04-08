# ConfigRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to [**RoomTypeShortInfoType**](RoomTypeShortInfoType.md) |  | [optional] 
**Floor** | Pointer to **string** | Floor of the Room. | [optional] 
**FloorDescription** | Pointer to **string** | Description for the Floor of the Room. | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**RoomDescription** | Pointer to **string** | Detail Long Description Of The Room. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**SmokingPreference** | Pointer to **string** | This indicates room smoking preference. | [optional] 
**SmokingPreferenceDescription** | Pointer to **string** | This indicates the description of the room smoking preference. | [optional] 
**Building** | Pointer to **string** | Building associated with the room. | [optional] 
**RoomAssignmentRating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 
**Accessible** | Pointer to **bool** | Indicates whether the room is accessibility compliant. | [optional] 
**RoomId** | Pointer to **string** | Code of the room. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether the room is a Meeting Room | [optional] 
**RoomComponents** | Pointer to [**[]RoomComponentType**](RoomComponentType.md) | Component of a room. | [optional] 
**ConnectingRooms** | Pointer to [**[]RoomRoomType**](RoomRoomType.md) | Collection of rooms. | [optional] 
**RateCode** | Pointer to **string** | Published rate code of a room. | [optional] 
**RateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**MaximumOccupancy** | Pointer to **int32** | Maximum occupancy of a room. | [optional] 
**SellSequence** | Pointer to **float32** | Display sequence of a room. | [optional] 
**OwnerRoom** | Pointer to **bool** | This indicates if room is marked as a owner room | [optional] 
**UnitGradeCode** | Pointer to **string** | The Unit Grade Code attached to the room | [optional] 
**Smoking** | Pointer to **bool** | This indicates if smoking is allowed in the room. | [optional] 
**KeyCode** | Pointer to **string** | Key code of a room. | [optional] 
**KeyOptions** | Pointer to **[]string** |  | [optional] 
**SquareUnits** | Pointer to **float32** | Square units of a room. | [optional] 
**TurndownService** | Pointer to **bool** | Turndown service flag of a room. | [optional] 
**SquareUnitsMeasurement** | Pointer to **string** | Square unit measurement of a room. | [optional] 
**PhoneNumber** | Pointer to **string** | Square unit measurement of a room. | [optional] 
**HousekeepingCredit** | Pointer to [**[]HousekeepingCreditsType**](HousekeepingCreditsType.md) | Housekeeping credits of the room. This may include stayover, departure, pickup and turndown credits. | [optional] 
**RoomSection** | Pointer to [**RoomSectionType**](RoomSectionType.md) |  | [optional] 
**NoOfBeds** | Pointer to **int32** | Number of beds of the room. | [optional] 

## Methods

### NewConfigRoomType

`func NewConfigRoomType() *ConfigRoomType`

NewConfigRoomType instantiates a new ConfigRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigRoomTypeWithDefaults

`func NewConfigRoomTypeWithDefaults() *ConfigRoomType`

NewConfigRoomTypeWithDefaults instantiates a new ConfigRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *ConfigRoomType) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ConfigRoomType) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ConfigRoomType) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ConfigRoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetFloor

`func (o *ConfigRoomType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *ConfigRoomType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *ConfigRoomType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *ConfigRoomType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *ConfigRoomType) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *ConfigRoomType) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *ConfigRoomType) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *ConfigRoomType) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *ConfigRoomType) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *ConfigRoomType) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *ConfigRoomType) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *ConfigRoomType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomDescription

`func (o *ConfigRoomType) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *ConfigRoomType) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *ConfigRoomType) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *ConfigRoomType) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigRoomType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigRoomType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigRoomType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigRoomType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *ConfigRoomType) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *ConfigRoomType) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *ConfigRoomType) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *ConfigRoomType) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *ConfigRoomType) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *ConfigRoomType) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *ConfigRoomType) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *ConfigRoomType) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.

### GetBuilding

`func (o *ConfigRoomType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *ConfigRoomType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *ConfigRoomType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *ConfigRoomType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *ConfigRoomType) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *ConfigRoomType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *ConfigRoomType) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *ConfigRoomType) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetAccessible

`func (o *ConfigRoomType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *ConfigRoomType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *ConfigRoomType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *ConfigRoomType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetRoomId

`func (o *ConfigRoomType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ConfigRoomType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ConfigRoomType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ConfigRoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *ConfigRoomType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *ConfigRoomType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *ConfigRoomType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *ConfigRoomType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetRoomComponents

`func (o *ConfigRoomType) GetRoomComponents() []RoomComponentType`

GetRoomComponents returns the RoomComponents field if non-nil, zero value otherwise.

### GetRoomComponentsOk

`func (o *ConfigRoomType) GetRoomComponentsOk() (*[]RoomComponentType, bool)`

GetRoomComponentsOk returns a tuple with the RoomComponents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomComponents

`func (o *ConfigRoomType) SetRoomComponents(v []RoomComponentType)`

SetRoomComponents sets RoomComponents field to given value.

### HasRoomComponents

`func (o *ConfigRoomType) HasRoomComponents() bool`

HasRoomComponents returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *ConfigRoomType) GetConnectingRooms() []RoomRoomType`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *ConfigRoomType) GetConnectingRoomsOk() (*[]RoomRoomType, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *ConfigRoomType) SetConnectingRooms(v []RoomRoomType)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *ConfigRoomType) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.

### GetRateCode

`func (o *ConfigRoomType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *ConfigRoomType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *ConfigRoomType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *ConfigRoomType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateAmount

`func (o *ConfigRoomType) GetRateAmount() CurrencyAmountType`

GetRateAmount returns the RateAmount field if non-nil, zero value otherwise.

### GetRateAmountOk

`func (o *ConfigRoomType) GetRateAmountOk() (*CurrencyAmountType, bool)`

GetRateAmountOk returns a tuple with the RateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmount

`func (o *ConfigRoomType) SetRateAmount(v CurrencyAmountType)`

SetRateAmount sets RateAmount field to given value.

### HasRateAmount

`func (o *ConfigRoomType) HasRateAmount() bool`

HasRateAmount returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *ConfigRoomType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *ConfigRoomType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *ConfigRoomType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *ConfigRoomType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetSellSequence

`func (o *ConfigRoomType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *ConfigRoomType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *ConfigRoomType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *ConfigRoomType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetOwnerRoom

`func (o *ConfigRoomType) GetOwnerRoom() bool`

GetOwnerRoom returns the OwnerRoom field if non-nil, zero value otherwise.

### GetOwnerRoomOk

`func (o *ConfigRoomType) GetOwnerRoomOk() (*bool, bool)`

GetOwnerRoomOk returns a tuple with the OwnerRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRoom

`func (o *ConfigRoomType) SetOwnerRoom(v bool)`

SetOwnerRoom sets OwnerRoom field to given value.

### HasOwnerRoom

`func (o *ConfigRoomType) HasOwnerRoom() bool`

HasOwnerRoom returns a boolean if a field has been set.

### GetUnitGradeCode

`func (o *ConfigRoomType) GetUnitGradeCode() string`

GetUnitGradeCode returns the UnitGradeCode field if non-nil, zero value otherwise.

### GetUnitGradeCodeOk

`func (o *ConfigRoomType) GetUnitGradeCodeOk() (*string, bool)`

GetUnitGradeCodeOk returns a tuple with the UnitGradeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitGradeCode

`func (o *ConfigRoomType) SetUnitGradeCode(v string)`

SetUnitGradeCode sets UnitGradeCode field to given value.

### HasUnitGradeCode

`func (o *ConfigRoomType) HasUnitGradeCode() bool`

HasUnitGradeCode returns a boolean if a field has been set.

### GetSmoking

`func (o *ConfigRoomType) GetSmoking() bool`

GetSmoking returns the Smoking field if non-nil, zero value otherwise.

### GetSmokingOk

`func (o *ConfigRoomType) GetSmokingOk() (*bool, bool)`

GetSmokingOk returns a tuple with the Smoking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmoking

`func (o *ConfigRoomType) SetSmoking(v bool)`

SetSmoking sets Smoking field to given value.

### HasSmoking

`func (o *ConfigRoomType) HasSmoking() bool`

HasSmoking returns a boolean if a field has been set.

### GetKeyCode

`func (o *ConfigRoomType) GetKeyCode() string`

GetKeyCode returns the KeyCode field if non-nil, zero value otherwise.

### GetKeyCodeOk

`func (o *ConfigRoomType) GetKeyCodeOk() (*string, bool)`

GetKeyCodeOk returns a tuple with the KeyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCode

`func (o *ConfigRoomType) SetKeyCode(v string)`

SetKeyCode sets KeyCode field to given value.

### HasKeyCode

`func (o *ConfigRoomType) HasKeyCode() bool`

HasKeyCode returns a boolean if a field has been set.

### GetKeyOptions

`func (o *ConfigRoomType) GetKeyOptions() []string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *ConfigRoomType) GetKeyOptionsOk() (*[]string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *ConfigRoomType) SetKeyOptions(v []string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *ConfigRoomType) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetSquareUnits

`func (o *ConfigRoomType) GetSquareUnits() float32`

GetSquareUnits returns the SquareUnits field if non-nil, zero value otherwise.

### GetSquareUnitsOk

`func (o *ConfigRoomType) GetSquareUnitsOk() (*float32, bool)`

GetSquareUnitsOk returns a tuple with the SquareUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSquareUnits

`func (o *ConfigRoomType) SetSquareUnits(v float32)`

SetSquareUnits sets SquareUnits field to given value.

### HasSquareUnits

`func (o *ConfigRoomType) HasSquareUnits() bool`

HasSquareUnits returns a boolean if a field has been set.

### GetTurndownService

`func (o *ConfigRoomType) GetTurndownService() bool`

GetTurndownService returns the TurndownService field if non-nil, zero value otherwise.

### GetTurndownServiceOk

`func (o *ConfigRoomType) GetTurndownServiceOk() (*bool, bool)`

GetTurndownServiceOk returns a tuple with the TurndownService field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownService

`func (o *ConfigRoomType) SetTurndownService(v bool)`

SetTurndownService sets TurndownService field to given value.

### HasTurndownService

`func (o *ConfigRoomType) HasTurndownService() bool`

HasTurndownService returns a boolean if a field has been set.

### GetSquareUnitsMeasurement

`func (o *ConfigRoomType) GetSquareUnitsMeasurement() string`

GetSquareUnitsMeasurement returns the SquareUnitsMeasurement field if non-nil, zero value otherwise.

### GetSquareUnitsMeasurementOk

`func (o *ConfigRoomType) GetSquareUnitsMeasurementOk() (*string, bool)`

GetSquareUnitsMeasurementOk returns a tuple with the SquareUnitsMeasurement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSquareUnitsMeasurement

`func (o *ConfigRoomType) SetSquareUnitsMeasurement(v string)`

SetSquareUnitsMeasurement sets SquareUnitsMeasurement field to given value.

### HasSquareUnitsMeasurement

`func (o *ConfigRoomType) HasSquareUnitsMeasurement() bool`

HasSquareUnitsMeasurement returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *ConfigRoomType) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *ConfigRoomType) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *ConfigRoomType) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *ConfigRoomType) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetHousekeepingCredit

`func (o *ConfigRoomType) GetHousekeepingCredit() []HousekeepingCreditsType`

GetHousekeepingCredit returns the HousekeepingCredit field if non-nil, zero value otherwise.

### GetHousekeepingCreditOk

`func (o *ConfigRoomType) GetHousekeepingCreditOk() (*[]HousekeepingCreditsType, bool)`

GetHousekeepingCreditOk returns a tuple with the HousekeepingCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingCredit

`func (o *ConfigRoomType) SetHousekeepingCredit(v []HousekeepingCreditsType)`

SetHousekeepingCredit sets HousekeepingCredit field to given value.

### HasHousekeepingCredit

`func (o *ConfigRoomType) HasHousekeepingCredit() bool`

HasHousekeepingCredit returns a boolean if a field has been set.

### GetRoomSection

`func (o *ConfigRoomType) GetRoomSection() RoomSectionType`

GetRoomSection returns the RoomSection field if non-nil, zero value otherwise.

### GetRoomSectionOk

`func (o *ConfigRoomType) GetRoomSectionOk() (*RoomSectionType, bool)`

GetRoomSectionOk returns a tuple with the RoomSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSection

`func (o *ConfigRoomType) SetRoomSection(v RoomSectionType)`

SetRoomSection sets RoomSection field to given value.

### HasRoomSection

`func (o *ConfigRoomType) HasRoomSection() bool`

HasRoomSection returns a boolean if a field has been set.

### GetNoOfBeds

`func (o *ConfigRoomType) GetNoOfBeds() int32`

GetNoOfBeds returns the NoOfBeds field if non-nil, zero value otherwise.

### GetNoOfBedsOk

`func (o *ConfigRoomType) GetNoOfBedsOk() (*int32, bool)`

GetNoOfBedsOk returns a tuple with the NoOfBeds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfBeds

`func (o *ConfigRoomType) SetNoOfBeds(v int32)`

SetNoOfBeds sets NoOfBeds field to given value.

### HasNoOfBeds

`func (o *ConfigRoomType) HasNoOfBeds() bool`

HasNoOfBeds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


