# RateAvailabilityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardType** | Pointer to **string** | Unique code that identifies this award. | [optional] 
**HotelId** | Pointer to **string** | HotelCode where the award will be consumed. | [optional] 
**TotalAvailablePoints** | Pointer to **float32** | Total award points available for redemption. | [optional] 
**PointsRequired** | Pointer to **float32** | The number of points that must be redeemed for this award. | [optional] 
**CancelPenaltyPoints** | Pointer to **float32** | The award points that will be forfeited if the cancel penalty charge is applied. | [optional] 
**CancelPenaltyDays** | Pointer to **float32** | Number of days before arrival when a reservation may be cancelled without an award points penalty. | [optional] 
**CancelPenaltyCharge** | Pointer to **float32** | The cancel penalty charge. | [optional] 
**CancelPenaltyType** | Pointer to **string** | The penalty charge is either a percentage or a flat number of points. | [optional] 
**RawIssueKey** | Pointer to **string** | Issue key in format of Raw data. | [optional] 
**AwardNumber** | Pointer to **float32** | An identifying number of the award, assigned by the system when the award was issued. | [optional] 
**RateCode** | Pointer to **string** | Rate code associated with the award. | [optional] 
**RateDescription** | Pointer to **string** | Rate code description associated with the award. | [optional] 
**RoomLabel** | Pointer to **string** | Code for the room type in which the award was issued. | [optional] 
**RoomDescription** | Pointer to **string** | Description of the Room. | [optional] 
**RoomCategory** | Pointer to **string** | Indicates which room category it belongs. | [optional] 
**StayDate** | Pointer to **string** | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award. | [optional] 

## Methods

### NewRateAvailabilityType

`func NewRateAvailabilityType() *RateAvailabilityType`

NewRateAvailabilityType instantiates a new RateAvailabilityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateAvailabilityTypeWithDefaults

`func NewRateAvailabilityTypeWithDefaults() *RateAvailabilityType`

NewRateAvailabilityTypeWithDefaults instantiates a new RateAvailabilityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardType

`func (o *RateAvailabilityType) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *RateAvailabilityType) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *RateAvailabilityType) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *RateAvailabilityType) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetHotelId

`func (o *RateAvailabilityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RateAvailabilityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RateAvailabilityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RateAvailabilityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTotalAvailablePoints

`func (o *RateAvailabilityType) GetTotalAvailablePoints() float32`

GetTotalAvailablePoints returns the TotalAvailablePoints field if non-nil, zero value otherwise.

### GetTotalAvailablePointsOk

`func (o *RateAvailabilityType) GetTotalAvailablePointsOk() (*float32, bool)`

GetTotalAvailablePointsOk returns a tuple with the TotalAvailablePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAvailablePoints

`func (o *RateAvailabilityType) SetTotalAvailablePoints(v float32)`

SetTotalAvailablePoints sets TotalAvailablePoints field to given value.

### HasTotalAvailablePoints

`func (o *RateAvailabilityType) HasTotalAvailablePoints() bool`

HasTotalAvailablePoints returns a boolean if a field has been set.

### GetPointsRequired

`func (o *RateAvailabilityType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *RateAvailabilityType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *RateAvailabilityType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *RateAvailabilityType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetCancelPenaltyPoints

`func (o *RateAvailabilityType) GetCancelPenaltyPoints() float32`

GetCancelPenaltyPoints returns the CancelPenaltyPoints field if non-nil, zero value otherwise.

### GetCancelPenaltyPointsOk

`func (o *RateAvailabilityType) GetCancelPenaltyPointsOk() (*float32, bool)`

GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyPoints

`func (o *RateAvailabilityType) SetCancelPenaltyPoints(v float32)`

SetCancelPenaltyPoints sets CancelPenaltyPoints field to given value.

### HasCancelPenaltyPoints

`func (o *RateAvailabilityType) HasCancelPenaltyPoints() bool`

HasCancelPenaltyPoints returns a boolean if a field has been set.

### GetCancelPenaltyDays

`func (o *RateAvailabilityType) GetCancelPenaltyDays() float32`

GetCancelPenaltyDays returns the CancelPenaltyDays field if non-nil, zero value otherwise.

### GetCancelPenaltyDaysOk

`func (o *RateAvailabilityType) GetCancelPenaltyDaysOk() (*float32, bool)`

GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyDays

`func (o *RateAvailabilityType) SetCancelPenaltyDays(v float32)`

SetCancelPenaltyDays sets CancelPenaltyDays field to given value.

### HasCancelPenaltyDays

`func (o *RateAvailabilityType) HasCancelPenaltyDays() bool`

HasCancelPenaltyDays returns a boolean if a field has been set.

### GetCancelPenaltyCharge

`func (o *RateAvailabilityType) GetCancelPenaltyCharge() float32`

GetCancelPenaltyCharge returns the CancelPenaltyCharge field if non-nil, zero value otherwise.

### GetCancelPenaltyChargeOk

`func (o *RateAvailabilityType) GetCancelPenaltyChargeOk() (*float32, bool)`

GetCancelPenaltyChargeOk returns a tuple with the CancelPenaltyCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyCharge

`func (o *RateAvailabilityType) SetCancelPenaltyCharge(v float32)`

SetCancelPenaltyCharge sets CancelPenaltyCharge field to given value.

### HasCancelPenaltyCharge

`func (o *RateAvailabilityType) HasCancelPenaltyCharge() bool`

HasCancelPenaltyCharge returns a boolean if a field has been set.

### GetCancelPenaltyType

`func (o *RateAvailabilityType) GetCancelPenaltyType() string`

GetCancelPenaltyType returns the CancelPenaltyType field if non-nil, zero value otherwise.

### GetCancelPenaltyTypeOk

`func (o *RateAvailabilityType) GetCancelPenaltyTypeOk() (*string, bool)`

GetCancelPenaltyTypeOk returns a tuple with the CancelPenaltyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyType

`func (o *RateAvailabilityType) SetCancelPenaltyType(v string)`

SetCancelPenaltyType sets CancelPenaltyType field to given value.

### HasCancelPenaltyType

`func (o *RateAvailabilityType) HasCancelPenaltyType() bool`

HasCancelPenaltyType returns a boolean if a field has been set.

### GetRawIssueKey

`func (o *RateAvailabilityType) GetRawIssueKey() string`

GetRawIssueKey returns the RawIssueKey field if non-nil, zero value otherwise.

### GetRawIssueKeyOk

`func (o *RateAvailabilityType) GetRawIssueKeyOk() (*string, bool)`

GetRawIssueKeyOk returns a tuple with the RawIssueKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawIssueKey

`func (o *RateAvailabilityType) SetRawIssueKey(v string)`

SetRawIssueKey sets RawIssueKey field to given value.

### HasRawIssueKey

`func (o *RateAvailabilityType) HasRawIssueKey() bool`

HasRawIssueKey returns a boolean if a field has been set.

### GetAwardNumber

`func (o *RateAvailabilityType) GetAwardNumber() float32`

GetAwardNumber returns the AwardNumber field if non-nil, zero value otherwise.

### GetAwardNumberOk

`func (o *RateAvailabilityType) GetAwardNumberOk() (*float32, bool)`

GetAwardNumberOk returns a tuple with the AwardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardNumber

`func (o *RateAvailabilityType) SetAwardNumber(v float32)`

SetAwardNumber sets AwardNumber field to given value.

### HasAwardNumber

`func (o *RateAvailabilityType) HasAwardNumber() bool`

HasAwardNumber returns a boolean if a field has been set.

### GetRateCode

`func (o *RateAvailabilityType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *RateAvailabilityType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *RateAvailabilityType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *RateAvailabilityType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateDescription

`func (o *RateAvailabilityType) GetRateDescription() string`

GetRateDescription returns the RateDescription field if non-nil, zero value otherwise.

### GetRateDescriptionOk

`func (o *RateAvailabilityType) GetRateDescriptionOk() (*string, bool)`

GetRateDescriptionOk returns a tuple with the RateDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateDescription

`func (o *RateAvailabilityType) SetRateDescription(v string)`

SetRateDescription sets RateDescription field to given value.

### HasRateDescription

`func (o *RateAvailabilityType) HasRateDescription() bool`

HasRateDescription returns a boolean if a field has been set.

### GetRoomLabel

`func (o *RateAvailabilityType) GetRoomLabel() string`

GetRoomLabel returns the RoomLabel field if non-nil, zero value otherwise.

### GetRoomLabelOk

`func (o *RateAvailabilityType) GetRoomLabelOk() (*string, bool)`

GetRoomLabelOk returns a tuple with the RoomLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomLabel

`func (o *RateAvailabilityType) SetRoomLabel(v string)`

SetRoomLabel sets RoomLabel field to given value.

### HasRoomLabel

`func (o *RateAvailabilityType) HasRoomLabel() bool`

HasRoomLabel returns a boolean if a field has been set.

### GetRoomDescription

`func (o *RateAvailabilityType) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *RateAvailabilityType) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *RateAvailabilityType) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *RateAvailabilityType) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetRoomCategory

`func (o *RateAvailabilityType) GetRoomCategory() string`

GetRoomCategory returns the RoomCategory field if non-nil, zero value otherwise.

### GetRoomCategoryOk

`func (o *RateAvailabilityType) GetRoomCategoryOk() (*string, bool)`

GetRoomCategoryOk returns a tuple with the RoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCategory

`func (o *RateAvailabilityType) SetRoomCategory(v string)`

SetRoomCategory sets RoomCategory field to given value.

### HasRoomCategory

`func (o *RateAvailabilityType) HasRoomCategory() bool`

HasRoomCategory returns a boolean if a field has been set.

### GetStayDate

`func (o *RateAvailabilityType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *RateAvailabilityType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *RateAvailabilityType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *RateAvailabilityType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


