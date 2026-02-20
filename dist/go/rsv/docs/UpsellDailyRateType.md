# UpsellDailyRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Reservation date | [optional] 
**RequiredAmount** | Pointer to [**AmountPointsType**](AmountPointsType.md) |  | [optional] 

## Methods

### NewUpsellDailyRateType

`func NewUpsellDailyRateType() *UpsellDailyRateType`

NewUpsellDailyRateType instantiates a new UpsellDailyRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellDailyRateTypeWithDefaults

`func NewUpsellDailyRateTypeWithDefaults() *UpsellDailyRateType`

NewUpsellDailyRateTypeWithDefaults instantiates a new UpsellDailyRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *UpsellDailyRateType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *UpsellDailyRateType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *UpsellDailyRateType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *UpsellDailyRateType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetRequiredAmount

`func (o *UpsellDailyRateType) GetRequiredAmount() AmountPointsType`

GetRequiredAmount returns the RequiredAmount field if non-nil, zero value otherwise.

### GetRequiredAmountOk

`func (o *UpsellDailyRateType) GetRequiredAmountOk() (*AmountPointsType, bool)`

GetRequiredAmountOk returns a tuple with the RequiredAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredAmount

`func (o *UpsellDailyRateType) SetRequiredAmount(v AmountPointsType)`

SetRequiredAmount sets RequiredAmount field to given value.

### HasRequiredAmount

`func (o *UpsellDailyRateType) HasRequiredAmount() bool`

HasRequiredAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


