# AwardUpgradeSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardCode** | Pointer to **string** | User configured award code. | [optional] 
**FromRoomType** | Pointer to **string** | From Room type associated with the award. | [optional] 
**ToRoomType** | Pointer to **string** | To Room type associated with the award. | [optional] 
**PointsRequired** | Pointer to **int32** | Total Number of points required for the award. | [optional] 
**PenaltyPoints** | Pointer to **int32** | Total Number of penalty points if cancelled. | [optional] 
**PenaltyDays** | Pointer to **int32** | Number days before arrival to apply penalty for cancellation. | [optional] 
**PenaltyCharge** | Pointer to **int32** | Number points deducted if award is cancelled. | [optional] 
**PenaltyType** | Pointer to **string** | Type of cancel penalty like Points, etc. | [optional] 
**AwardUpgradeDetails** | Pointer to [**[]AwardUpgradeDetailType**](AwardUpgradeDetailType.md) | Daily Details related to award upgrade. | [optional] 

## Methods

### NewAwardUpgradeSummaryType

`func NewAwardUpgradeSummaryType() *AwardUpgradeSummaryType`

NewAwardUpgradeSummaryType instantiates a new AwardUpgradeSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardUpgradeSummaryTypeWithDefaults

`func NewAwardUpgradeSummaryTypeWithDefaults() *AwardUpgradeSummaryType`

NewAwardUpgradeSummaryTypeWithDefaults instantiates a new AwardUpgradeSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardCode

`func (o *AwardUpgradeSummaryType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *AwardUpgradeSummaryType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *AwardUpgradeSummaryType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *AwardUpgradeSummaryType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetFromRoomType

`func (o *AwardUpgradeSummaryType) GetFromRoomType() string`

GetFromRoomType returns the FromRoomType field if non-nil, zero value otherwise.

### GetFromRoomTypeOk

`func (o *AwardUpgradeSummaryType) GetFromRoomTypeOk() (*string, bool)`

GetFromRoomTypeOk returns a tuple with the FromRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoomType

`func (o *AwardUpgradeSummaryType) SetFromRoomType(v string)`

SetFromRoomType sets FromRoomType field to given value.

### HasFromRoomType

`func (o *AwardUpgradeSummaryType) HasFromRoomType() bool`

HasFromRoomType returns a boolean if a field has been set.

### GetToRoomType

`func (o *AwardUpgradeSummaryType) GetToRoomType() string`

GetToRoomType returns the ToRoomType field if non-nil, zero value otherwise.

### GetToRoomTypeOk

`func (o *AwardUpgradeSummaryType) GetToRoomTypeOk() (*string, bool)`

GetToRoomTypeOk returns a tuple with the ToRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoomType

`func (o *AwardUpgradeSummaryType) SetToRoomType(v string)`

SetToRoomType sets ToRoomType field to given value.

### HasToRoomType

`func (o *AwardUpgradeSummaryType) HasToRoomType() bool`

HasToRoomType returns a boolean if a field has been set.

### GetPointsRequired

`func (o *AwardUpgradeSummaryType) GetPointsRequired() int32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *AwardUpgradeSummaryType) GetPointsRequiredOk() (*int32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *AwardUpgradeSummaryType) SetPointsRequired(v int32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *AwardUpgradeSummaryType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetPenaltyPoints

`func (o *AwardUpgradeSummaryType) GetPenaltyPoints() int32`

GetPenaltyPoints returns the PenaltyPoints field if non-nil, zero value otherwise.

### GetPenaltyPointsOk

`func (o *AwardUpgradeSummaryType) GetPenaltyPointsOk() (*int32, bool)`

GetPenaltyPointsOk returns a tuple with the PenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyPoints

`func (o *AwardUpgradeSummaryType) SetPenaltyPoints(v int32)`

SetPenaltyPoints sets PenaltyPoints field to given value.

### HasPenaltyPoints

`func (o *AwardUpgradeSummaryType) HasPenaltyPoints() bool`

HasPenaltyPoints returns a boolean if a field has been set.

### GetPenaltyDays

`func (o *AwardUpgradeSummaryType) GetPenaltyDays() int32`

GetPenaltyDays returns the PenaltyDays field if non-nil, zero value otherwise.

### GetPenaltyDaysOk

`func (o *AwardUpgradeSummaryType) GetPenaltyDaysOk() (*int32, bool)`

GetPenaltyDaysOk returns a tuple with the PenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyDays

`func (o *AwardUpgradeSummaryType) SetPenaltyDays(v int32)`

SetPenaltyDays sets PenaltyDays field to given value.

### HasPenaltyDays

`func (o *AwardUpgradeSummaryType) HasPenaltyDays() bool`

HasPenaltyDays returns a boolean if a field has been set.

### GetPenaltyCharge

`func (o *AwardUpgradeSummaryType) GetPenaltyCharge() int32`

GetPenaltyCharge returns the PenaltyCharge field if non-nil, zero value otherwise.

### GetPenaltyChargeOk

`func (o *AwardUpgradeSummaryType) GetPenaltyChargeOk() (*int32, bool)`

GetPenaltyChargeOk returns a tuple with the PenaltyCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyCharge

`func (o *AwardUpgradeSummaryType) SetPenaltyCharge(v int32)`

SetPenaltyCharge sets PenaltyCharge field to given value.

### HasPenaltyCharge

`func (o *AwardUpgradeSummaryType) HasPenaltyCharge() bool`

HasPenaltyCharge returns a boolean if a field has been set.

### GetPenaltyType

`func (o *AwardUpgradeSummaryType) GetPenaltyType() string`

GetPenaltyType returns the PenaltyType field if non-nil, zero value otherwise.

### GetPenaltyTypeOk

`func (o *AwardUpgradeSummaryType) GetPenaltyTypeOk() (*string, bool)`

GetPenaltyTypeOk returns a tuple with the PenaltyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyType

`func (o *AwardUpgradeSummaryType) SetPenaltyType(v string)`

SetPenaltyType sets PenaltyType field to given value.

### HasPenaltyType

`func (o *AwardUpgradeSummaryType) HasPenaltyType() bool`

HasPenaltyType returns a boolean if a field has been set.

### GetAwardUpgradeDetails

`func (o *AwardUpgradeSummaryType) GetAwardUpgradeDetails() []AwardUpgradeDetailType`

GetAwardUpgradeDetails returns the AwardUpgradeDetails field if non-nil, zero value otherwise.

### GetAwardUpgradeDetailsOk

`func (o *AwardUpgradeSummaryType) GetAwardUpgradeDetailsOk() (*[]AwardUpgradeDetailType, bool)`

GetAwardUpgradeDetailsOk returns a tuple with the AwardUpgradeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardUpgradeDetails

`func (o *AwardUpgradeSummaryType) SetAwardUpgradeDetails(v []AwardUpgradeDetailType)`

SetAwardUpgradeDetails sets AwardUpgradeDetails field to given value.

### HasAwardUpgradeDetails

`func (o *AwardUpgradeSummaryType) HasAwardUpgradeDetails() bool`

HasAwardUpgradeDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


