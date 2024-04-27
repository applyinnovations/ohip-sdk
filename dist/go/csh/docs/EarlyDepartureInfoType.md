# EarlyDepartureInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PenaltyAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PenaltyDescription** | Pointer to **string** | Description of the Early Departure Penalty calculation rule. | [optional] 

## Methods

### NewEarlyDepartureInfoType

`func NewEarlyDepartureInfoType() *EarlyDepartureInfoType`

NewEarlyDepartureInfoType instantiates a new EarlyDepartureInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEarlyDepartureInfoTypeWithDefaults

`func NewEarlyDepartureInfoTypeWithDefaults() *EarlyDepartureInfoType`

NewEarlyDepartureInfoTypeWithDefaults instantiates a new EarlyDepartureInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPenaltyAmount

`func (o *EarlyDepartureInfoType) GetPenaltyAmount() CurrencyAmountType`

GetPenaltyAmount returns the PenaltyAmount field if non-nil, zero value otherwise.

### GetPenaltyAmountOk

`func (o *EarlyDepartureInfoType) GetPenaltyAmountOk() (*CurrencyAmountType, bool)`

GetPenaltyAmountOk returns a tuple with the PenaltyAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyAmount

`func (o *EarlyDepartureInfoType) SetPenaltyAmount(v CurrencyAmountType)`

SetPenaltyAmount sets PenaltyAmount field to given value.

### HasPenaltyAmount

`func (o *EarlyDepartureInfoType) HasPenaltyAmount() bool`

HasPenaltyAmount returns a boolean if a field has been set.

### GetPenaltyDescription

`func (o *EarlyDepartureInfoType) GetPenaltyDescription() string`

GetPenaltyDescription returns the PenaltyDescription field if non-nil, zero value otherwise.

### GetPenaltyDescriptionOk

`func (o *EarlyDepartureInfoType) GetPenaltyDescriptionOk() (*string, bool)`

GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyDescription

`func (o *EarlyDepartureInfoType) SetPenaltyDescription(v string)`

SetPenaltyDescription sets PenaltyDescription field to given value.

### HasPenaltyDescription

`func (o *EarlyDepartureInfoType) HasPenaltyDescription() bool`

HasPenaltyDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


