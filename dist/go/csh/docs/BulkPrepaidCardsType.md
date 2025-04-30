# BulkPrepaidCardsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivatedCards** | Pointer to [**[]BulkPrepaidCardDetailsType**](BulkPrepaidCardDetailsType.md) | List of card-specific details for prepaid cards that were successfully activated. | [optional] 
**UnsuccessfulCards** | Pointer to [**[]BulkPrepaidCardsStatusType**](BulkPrepaidCardsStatusType.md) | List of prepaid cards that were not activated with response information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBulkPrepaidCardsType

`func NewBulkPrepaidCardsType() *BulkPrepaidCardsType`

NewBulkPrepaidCardsType instantiates a new BulkPrepaidCardsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkPrepaidCardsTypeWithDefaults

`func NewBulkPrepaidCardsTypeWithDefaults() *BulkPrepaidCardsType`

NewBulkPrepaidCardsTypeWithDefaults instantiates a new BulkPrepaidCardsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivatedCards

`func (o *BulkPrepaidCardsType) GetActivatedCards() []BulkPrepaidCardDetailsType`

GetActivatedCards returns the ActivatedCards field if non-nil, zero value otherwise.

### GetActivatedCardsOk

`func (o *BulkPrepaidCardsType) GetActivatedCardsOk() (*[]BulkPrepaidCardDetailsType, bool)`

GetActivatedCardsOk returns a tuple with the ActivatedCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivatedCards

`func (o *BulkPrepaidCardsType) SetActivatedCards(v []BulkPrepaidCardDetailsType)`

SetActivatedCards sets ActivatedCards field to given value.

### HasActivatedCards

`func (o *BulkPrepaidCardsType) HasActivatedCards() bool`

HasActivatedCards returns a boolean if a field has been set.

### GetUnsuccessfulCards

`func (o *BulkPrepaidCardsType) GetUnsuccessfulCards() []BulkPrepaidCardsStatusType`

GetUnsuccessfulCards returns the UnsuccessfulCards field if non-nil, zero value otherwise.

### GetUnsuccessfulCardsOk

`func (o *BulkPrepaidCardsType) GetUnsuccessfulCardsOk() (*[]BulkPrepaidCardsStatusType, bool)`

GetUnsuccessfulCardsOk returns a tuple with the UnsuccessfulCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnsuccessfulCards

`func (o *BulkPrepaidCardsType) SetUnsuccessfulCards(v []BulkPrepaidCardsStatusType)`

SetUnsuccessfulCards sets UnsuccessfulCards field to given value.

### HasUnsuccessfulCards

`func (o *BulkPrepaidCardsType) HasUnsuccessfulCards() bool`

HasUnsuccessfulCards returns a boolean if a field has been set.

### GetLinks

`func (o *BulkPrepaidCardsType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BulkPrepaidCardsType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BulkPrepaidCardsType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BulkPrepaidCardsType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BulkPrepaidCardsType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BulkPrepaidCardsType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BulkPrepaidCardsType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BulkPrepaidCardsType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


