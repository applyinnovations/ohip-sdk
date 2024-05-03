# RedeemPrepaidCardsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrepaidCards** | Pointer to [**[]PrepaidCardInfoType**](PrepaidCardInfoType.md) | Prepaid card info object. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRedeemPrepaidCardsStatus

`func NewRedeemPrepaidCardsStatus() *RedeemPrepaidCardsStatus`

NewRedeemPrepaidCardsStatus instantiates a new RedeemPrepaidCardsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRedeemPrepaidCardsStatusWithDefaults

`func NewRedeemPrepaidCardsStatusWithDefaults() *RedeemPrepaidCardsStatus`

NewRedeemPrepaidCardsStatusWithDefaults instantiates a new RedeemPrepaidCardsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrepaidCards

`func (o *RedeemPrepaidCardsStatus) GetPrepaidCards() []PrepaidCardInfoType`

GetPrepaidCards returns the PrepaidCards field if non-nil, zero value otherwise.

### GetPrepaidCardsOk

`func (o *RedeemPrepaidCardsStatus) GetPrepaidCardsOk() (*[]PrepaidCardInfoType, bool)`

GetPrepaidCardsOk returns a tuple with the PrepaidCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCards

`func (o *RedeemPrepaidCardsStatus) SetPrepaidCards(v []PrepaidCardInfoType)`

SetPrepaidCards sets PrepaidCards field to given value.

### HasPrepaidCards

`func (o *RedeemPrepaidCardsStatus) HasPrepaidCards() bool`

HasPrepaidCards returns a boolean if a field has been set.

### GetWarnings

`func (o *RedeemPrepaidCardsStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RedeemPrepaidCardsStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RedeemPrepaidCardsStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RedeemPrepaidCardsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


