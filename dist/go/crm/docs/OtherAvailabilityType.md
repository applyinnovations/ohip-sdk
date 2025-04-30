# OtherAvailabilityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardType** | Pointer to **string** | Unique code that identifies this award. | [optional] 
**SellBeginDate** | Pointer to **string** | Beginning date of the award. | [optional] 
**SellEndDate** | Pointer to **string** | End date that the award will be available. | [optional] 
**ShortDescription** | Pointer to **string** | Descriptive name of the award. | [optional] 
**AwardValue** | Pointer to **float32** | The actual value of the award, in the amount of currency. | [optional] 
**TotalAvailablePoints** | Pointer to **float32** | Total award points available for redemption. | [optional] 
**PointsRequired** | Pointer to **float32** | The number of points that must be redeemed for this award. | [optional] 
**LongDescription** | Pointer to **string** | Detail description of the award. | [optional] 
**AwardNumber** | Pointer to **float32** | An identifying number of the award, assigned by the system when the award was issued. | [optional] 

## Methods

### NewOtherAvailabilityType

`func NewOtherAvailabilityType() *OtherAvailabilityType`

NewOtherAvailabilityType instantiates a new OtherAvailabilityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOtherAvailabilityTypeWithDefaults

`func NewOtherAvailabilityTypeWithDefaults() *OtherAvailabilityType`

NewOtherAvailabilityTypeWithDefaults instantiates a new OtherAvailabilityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardType

`func (o *OtherAvailabilityType) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *OtherAvailabilityType) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *OtherAvailabilityType) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *OtherAvailabilityType) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetSellBeginDate

`func (o *OtherAvailabilityType) GetSellBeginDate() string`

GetSellBeginDate returns the SellBeginDate field if non-nil, zero value otherwise.

### GetSellBeginDateOk

`func (o *OtherAvailabilityType) GetSellBeginDateOk() (*string, bool)`

GetSellBeginDateOk returns a tuple with the SellBeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellBeginDate

`func (o *OtherAvailabilityType) SetSellBeginDate(v string)`

SetSellBeginDate sets SellBeginDate field to given value.

### HasSellBeginDate

`func (o *OtherAvailabilityType) HasSellBeginDate() bool`

HasSellBeginDate returns a boolean if a field has been set.

### GetSellEndDate

`func (o *OtherAvailabilityType) GetSellEndDate() string`

GetSellEndDate returns the SellEndDate field if non-nil, zero value otherwise.

### GetSellEndDateOk

`func (o *OtherAvailabilityType) GetSellEndDateOk() (*string, bool)`

GetSellEndDateOk returns a tuple with the SellEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellEndDate

`func (o *OtherAvailabilityType) SetSellEndDate(v string)`

SetSellEndDate sets SellEndDate field to given value.

### HasSellEndDate

`func (o *OtherAvailabilityType) HasSellEndDate() bool`

HasSellEndDate returns a boolean if a field has been set.

### GetShortDescription

`func (o *OtherAvailabilityType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *OtherAvailabilityType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *OtherAvailabilityType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *OtherAvailabilityType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetAwardValue

`func (o *OtherAvailabilityType) GetAwardValue() float32`

GetAwardValue returns the AwardValue field if non-nil, zero value otherwise.

### GetAwardValueOk

`func (o *OtherAvailabilityType) GetAwardValueOk() (*float32, bool)`

GetAwardValueOk returns a tuple with the AwardValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardValue

`func (o *OtherAvailabilityType) SetAwardValue(v float32)`

SetAwardValue sets AwardValue field to given value.

### HasAwardValue

`func (o *OtherAvailabilityType) HasAwardValue() bool`

HasAwardValue returns a boolean if a field has been set.

### GetTotalAvailablePoints

`func (o *OtherAvailabilityType) GetTotalAvailablePoints() float32`

GetTotalAvailablePoints returns the TotalAvailablePoints field if non-nil, zero value otherwise.

### GetTotalAvailablePointsOk

`func (o *OtherAvailabilityType) GetTotalAvailablePointsOk() (*float32, bool)`

GetTotalAvailablePointsOk returns a tuple with the TotalAvailablePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAvailablePoints

`func (o *OtherAvailabilityType) SetTotalAvailablePoints(v float32)`

SetTotalAvailablePoints sets TotalAvailablePoints field to given value.

### HasTotalAvailablePoints

`func (o *OtherAvailabilityType) HasTotalAvailablePoints() bool`

HasTotalAvailablePoints returns a boolean if a field has been set.

### GetPointsRequired

`func (o *OtherAvailabilityType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *OtherAvailabilityType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *OtherAvailabilityType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *OtherAvailabilityType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetLongDescription

`func (o *OtherAvailabilityType) GetLongDescription() string`

GetLongDescription returns the LongDescription field if non-nil, zero value otherwise.

### GetLongDescriptionOk

`func (o *OtherAvailabilityType) GetLongDescriptionOk() (*string, bool)`

GetLongDescriptionOk returns a tuple with the LongDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongDescription

`func (o *OtherAvailabilityType) SetLongDescription(v string)`

SetLongDescription sets LongDescription field to given value.

### HasLongDescription

`func (o *OtherAvailabilityType) HasLongDescription() bool`

HasLongDescription returns a boolean if a field has been set.

### GetAwardNumber

`func (o *OtherAvailabilityType) GetAwardNumber() float32`

GetAwardNumber returns the AwardNumber field if non-nil, zero value otherwise.

### GetAwardNumberOk

`func (o *OtherAvailabilityType) GetAwardNumberOk() (*float32, bool)`

GetAwardNumberOk returns a tuple with the AwardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardNumber

`func (o *OtherAvailabilityType) SetAwardNumber(v float32)`

SetAwardNumber sets AwardNumber field to given value.

### HasAwardNumber

`func (o *OtherAvailabilityType) HasAwardNumber() bool`

HasAwardNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


