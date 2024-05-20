# UpgradeAvailabilityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardNumber** | Pointer to **float32** | An identifying number of the award, assigned by the system when the award was issued. | [optional] 
**AwardType** | Pointer to **string** | Unique code that identifies this award. | [optional] 
**CancelPenaltyCharge** | Pointer to **float32** | The cancel penalty charge. | [optional] 
**CancelPenaltyDays** | Pointer to **float32** | Number of days before arrival when a reservation may be cancelled without an award points penalty. | [optional] 
**CancelPenaltyPoints** | Pointer to **float32** | The award points that will be forfeited if the cancel penalty charge is applied. | [optional] 
**CancelPenaltyType** | Pointer to **string** | The penalty charge is either a percentage or a flat number of points. | [optional] 
**FromRoom** | Pointer to **string** | Indicates room type code for the room prior to the upgrade. | [optional] 
**FromRoomCategory** | Pointer to **string** | Indicates room type code for the room prior to the upgrade. | [optional] 
**FromRoomDescription** | Pointer to **string** | Indicates room type Description for the room prior to the upgrade. | [optional] 
**HotelId** | Pointer to **string** | HotelCode where the award will be consumed. | [optional] 
**PointsRequired** | Pointer to **float32** | The number of points that must be redeemed for this award. | [optional] 
**RawIssueKey** | Pointer to **string** | Issue key in format of Raw data. | [optional] 
**StayDate** | Pointer to **string** | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award. | [optional] 
**ToRoom** | Pointer to **string** | Indicates room type code of the upgrade room. | [optional] 
**ToRoomCategory** | Pointer to **string** | Indicates room type code of the upgrade room. | [optional] 
**ToRoomDescription** | Pointer to **string** | Indicates room type Description of the upgrade room. | [optional] 
**TotalAvailablePoints** | Pointer to **float32** | Total award points available for redemption. | [optional] 

## Methods

### NewUpgradeAvailabilityType

`func NewUpgradeAvailabilityType() *UpgradeAvailabilityType`

NewUpgradeAvailabilityType instantiates a new UpgradeAvailabilityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpgradeAvailabilityTypeWithDefaults

`func NewUpgradeAvailabilityTypeWithDefaults() *UpgradeAvailabilityType`

NewUpgradeAvailabilityTypeWithDefaults instantiates a new UpgradeAvailabilityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardNumber

`func (o *UpgradeAvailabilityType) GetAwardNumber() float32`

GetAwardNumber returns the AwardNumber field if non-nil, zero value otherwise.

### GetAwardNumberOk

`func (o *UpgradeAvailabilityType) GetAwardNumberOk() (*float32, bool)`

GetAwardNumberOk returns a tuple with the AwardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardNumber

`func (o *UpgradeAvailabilityType) SetAwardNumber(v float32)`

SetAwardNumber sets AwardNumber field to given value.

### HasAwardNumber

`func (o *UpgradeAvailabilityType) HasAwardNumber() bool`

HasAwardNumber returns a boolean if a field has been set.

### GetAwardType

`func (o *UpgradeAvailabilityType) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *UpgradeAvailabilityType) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *UpgradeAvailabilityType) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *UpgradeAvailabilityType) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetCancelPenaltyCharge

`func (o *UpgradeAvailabilityType) GetCancelPenaltyCharge() float32`

GetCancelPenaltyCharge returns the CancelPenaltyCharge field if non-nil, zero value otherwise.

### GetCancelPenaltyChargeOk

`func (o *UpgradeAvailabilityType) GetCancelPenaltyChargeOk() (*float32, bool)`

GetCancelPenaltyChargeOk returns a tuple with the CancelPenaltyCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyCharge

`func (o *UpgradeAvailabilityType) SetCancelPenaltyCharge(v float32)`

SetCancelPenaltyCharge sets CancelPenaltyCharge field to given value.

### HasCancelPenaltyCharge

`func (o *UpgradeAvailabilityType) HasCancelPenaltyCharge() bool`

HasCancelPenaltyCharge returns a boolean if a field has been set.

### GetCancelPenaltyDays

`func (o *UpgradeAvailabilityType) GetCancelPenaltyDays() float32`

GetCancelPenaltyDays returns the CancelPenaltyDays field if non-nil, zero value otherwise.

### GetCancelPenaltyDaysOk

`func (o *UpgradeAvailabilityType) GetCancelPenaltyDaysOk() (*float32, bool)`

GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyDays

`func (o *UpgradeAvailabilityType) SetCancelPenaltyDays(v float32)`

SetCancelPenaltyDays sets CancelPenaltyDays field to given value.

### HasCancelPenaltyDays

`func (o *UpgradeAvailabilityType) HasCancelPenaltyDays() bool`

HasCancelPenaltyDays returns a boolean if a field has been set.

### GetCancelPenaltyPoints

`func (o *UpgradeAvailabilityType) GetCancelPenaltyPoints() float32`

GetCancelPenaltyPoints returns the CancelPenaltyPoints field if non-nil, zero value otherwise.

### GetCancelPenaltyPointsOk

`func (o *UpgradeAvailabilityType) GetCancelPenaltyPointsOk() (*float32, bool)`

GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyPoints

`func (o *UpgradeAvailabilityType) SetCancelPenaltyPoints(v float32)`

SetCancelPenaltyPoints sets CancelPenaltyPoints field to given value.

### HasCancelPenaltyPoints

`func (o *UpgradeAvailabilityType) HasCancelPenaltyPoints() bool`

HasCancelPenaltyPoints returns a boolean if a field has been set.

### GetCancelPenaltyType

`func (o *UpgradeAvailabilityType) GetCancelPenaltyType() string`

GetCancelPenaltyType returns the CancelPenaltyType field if non-nil, zero value otherwise.

### GetCancelPenaltyTypeOk

`func (o *UpgradeAvailabilityType) GetCancelPenaltyTypeOk() (*string, bool)`

GetCancelPenaltyTypeOk returns a tuple with the CancelPenaltyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyType

`func (o *UpgradeAvailabilityType) SetCancelPenaltyType(v string)`

SetCancelPenaltyType sets CancelPenaltyType field to given value.

### HasCancelPenaltyType

`func (o *UpgradeAvailabilityType) HasCancelPenaltyType() bool`

HasCancelPenaltyType returns a boolean if a field has been set.

### GetFromRoom

`func (o *UpgradeAvailabilityType) GetFromRoom() string`

GetFromRoom returns the FromRoom field if non-nil, zero value otherwise.

### GetFromRoomOk

`func (o *UpgradeAvailabilityType) GetFromRoomOk() (*string, bool)`

GetFromRoomOk returns a tuple with the FromRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoom

`func (o *UpgradeAvailabilityType) SetFromRoom(v string)`

SetFromRoom sets FromRoom field to given value.

### HasFromRoom

`func (o *UpgradeAvailabilityType) HasFromRoom() bool`

HasFromRoom returns a boolean if a field has been set.

### GetFromRoomCategory

`func (o *UpgradeAvailabilityType) GetFromRoomCategory() string`

GetFromRoomCategory returns the FromRoomCategory field if non-nil, zero value otherwise.

### GetFromRoomCategoryOk

`func (o *UpgradeAvailabilityType) GetFromRoomCategoryOk() (*string, bool)`

GetFromRoomCategoryOk returns a tuple with the FromRoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoomCategory

`func (o *UpgradeAvailabilityType) SetFromRoomCategory(v string)`

SetFromRoomCategory sets FromRoomCategory field to given value.

### HasFromRoomCategory

`func (o *UpgradeAvailabilityType) HasFromRoomCategory() bool`

HasFromRoomCategory returns a boolean if a field has been set.

### GetFromRoomDescription

`func (o *UpgradeAvailabilityType) GetFromRoomDescription() string`

GetFromRoomDescription returns the FromRoomDescription field if non-nil, zero value otherwise.

### GetFromRoomDescriptionOk

`func (o *UpgradeAvailabilityType) GetFromRoomDescriptionOk() (*string, bool)`

GetFromRoomDescriptionOk returns a tuple with the FromRoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoomDescription

`func (o *UpgradeAvailabilityType) SetFromRoomDescription(v string)`

SetFromRoomDescription sets FromRoomDescription field to given value.

### HasFromRoomDescription

`func (o *UpgradeAvailabilityType) HasFromRoomDescription() bool`

HasFromRoomDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *UpgradeAvailabilityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *UpgradeAvailabilityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *UpgradeAvailabilityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *UpgradeAvailabilityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPointsRequired

`func (o *UpgradeAvailabilityType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *UpgradeAvailabilityType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *UpgradeAvailabilityType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *UpgradeAvailabilityType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetRawIssueKey

`func (o *UpgradeAvailabilityType) GetRawIssueKey() string`

GetRawIssueKey returns the RawIssueKey field if non-nil, zero value otherwise.

### GetRawIssueKeyOk

`func (o *UpgradeAvailabilityType) GetRawIssueKeyOk() (*string, bool)`

GetRawIssueKeyOk returns a tuple with the RawIssueKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawIssueKey

`func (o *UpgradeAvailabilityType) SetRawIssueKey(v string)`

SetRawIssueKey sets RawIssueKey field to given value.

### HasRawIssueKey

`func (o *UpgradeAvailabilityType) HasRawIssueKey() bool`

HasRawIssueKey returns a boolean if a field has been set.

### GetStayDate

`func (o *UpgradeAvailabilityType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *UpgradeAvailabilityType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *UpgradeAvailabilityType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *UpgradeAvailabilityType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.

### GetToRoom

`func (o *UpgradeAvailabilityType) GetToRoom() string`

GetToRoom returns the ToRoom field if non-nil, zero value otherwise.

### GetToRoomOk

`func (o *UpgradeAvailabilityType) GetToRoomOk() (*string, bool)`

GetToRoomOk returns a tuple with the ToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoom

`func (o *UpgradeAvailabilityType) SetToRoom(v string)`

SetToRoom sets ToRoom field to given value.

### HasToRoom

`func (o *UpgradeAvailabilityType) HasToRoom() bool`

HasToRoom returns a boolean if a field has been set.

### GetToRoomCategory

`func (o *UpgradeAvailabilityType) GetToRoomCategory() string`

GetToRoomCategory returns the ToRoomCategory field if non-nil, zero value otherwise.

### GetToRoomCategoryOk

`func (o *UpgradeAvailabilityType) GetToRoomCategoryOk() (*string, bool)`

GetToRoomCategoryOk returns a tuple with the ToRoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoomCategory

`func (o *UpgradeAvailabilityType) SetToRoomCategory(v string)`

SetToRoomCategory sets ToRoomCategory field to given value.

### HasToRoomCategory

`func (o *UpgradeAvailabilityType) HasToRoomCategory() bool`

HasToRoomCategory returns a boolean if a field has been set.

### GetToRoomDescription

`func (o *UpgradeAvailabilityType) GetToRoomDescription() string`

GetToRoomDescription returns the ToRoomDescription field if non-nil, zero value otherwise.

### GetToRoomDescriptionOk

`func (o *UpgradeAvailabilityType) GetToRoomDescriptionOk() (*string, bool)`

GetToRoomDescriptionOk returns a tuple with the ToRoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoomDescription

`func (o *UpgradeAvailabilityType) SetToRoomDescription(v string)`

SetToRoomDescription sets ToRoomDescription field to given value.

### HasToRoomDescription

`func (o *UpgradeAvailabilityType) HasToRoomDescription() bool`

HasToRoomDescription returns a boolean if a field has been set.

### GetTotalAvailablePoints

`func (o *UpgradeAvailabilityType) GetTotalAvailablePoints() float32`

GetTotalAvailablePoints returns the TotalAvailablePoints field if non-nil, zero value otherwise.

### GetTotalAvailablePointsOk

`func (o *UpgradeAvailabilityType) GetTotalAvailablePointsOk() (*float32, bool)`

GetTotalAvailablePointsOk returns a tuple with the TotalAvailablePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAvailablePoints

`func (o *UpgradeAvailabilityType) SetTotalAvailablePoints(v float32)`

SetTotalAvailablePoints sets TotalAvailablePoints field to given value.

### HasTotalAvailablePoints

`func (o *UpgradeAvailabilityType) HasTotalAvailablePoints() bool`

HasTotalAvailablePoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


