# AwardUpgradeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Date on which the award details like points required and penalty points are applicable. | [optional] 
**PointsRequired** | Pointer to **int32** | Points required for the award detail date. | [optional] 
**PenaltyPoints** | Pointer to **int32** | Penalty Points applicable for the award detail date. | [optional] 

## Methods

### NewAwardUpgradeDetailType

`func NewAwardUpgradeDetailType() *AwardUpgradeDetailType`

NewAwardUpgradeDetailType instantiates a new AwardUpgradeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardUpgradeDetailTypeWithDefaults

`func NewAwardUpgradeDetailTypeWithDefaults() *AwardUpgradeDetailType`

NewAwardUpgradeDetailTypeWithDefaults instantiates a new AwardUpgradeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *AwardUpgradeDetailType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AwardUpgradeDetailType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AwardUpgradeDetailType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *AwardUpgradeDetailType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetPointsRequired

`func (o *AwardUpgradeDetailType) GetPointsRequired() int32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *AwardUpgradeDetailType) GetPointsRequiredOk() (*int32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *AwardUpgradeDetailType) SetPointsRequired(v int32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *AwardUpgradeDetailType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetPenaltyPoints

`func (o *AwardUpgradeDetailType) GetPenaltyPoints() int32`

GetPenaltyPoints returns the PenaltyPoints field if non-nil, zero value otherwise.

### GetPenaltyPointsOk

`func (o *AwardUpgradeDetailType) GetPenaltyPointsOk() (*int32, bool)`

GetPenaltyPointsOk returns a tuple with the PenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyPoints

`func (o *AwardUpgradeDetailType) SetPenaltyPoints(v int32)`

SetPenaltyPoints sets PenaltyPoints field to given value.

### HasPenaltyPoints

`func (o *AwardUpgradeDetailType) HasPenaltyPoints() bool`

HasPenaltyPoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


