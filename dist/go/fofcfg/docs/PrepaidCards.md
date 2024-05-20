# PrepaidCards

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PrepaidCards** | Pointer to [**[]PrepaidCardType**](PrepaidCardType.md) | Holds fixed charge detail. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPrepaidCards

`func NewPrepaidCards() *PrepaidCards`

NewPrepaidCards instantiates a new PrepaidCards object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardsWithDefaults

`func NewPrepaidCardsWithDefaults() *PrepaidCards`

NewPrepaidCardsWithDefaults instantiates a new PrepaidCards object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PrepaidCards) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PrepaidCards) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PrepaidCards) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PrepaidCards) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPrepaidCards

`func (o *PrepaidCards) GetPrepaidCards() []PrepaidCardType`

GetPrepaidCards returns the PrepaidCards field if non-nil, zero value otherwise.

### GetPrepaidCardsOk

`func (o *PrepaidCards) GetPrepaidCardsOk() (*[]PrepaidCardType, bool)`

GetPrepaidCardsOk returns a tuple with the PrepaidCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCards

`func (o *PrepaidCards) SetPrepaidCards(v []PrepaidCardType)`

SetPrepaidCards sets PrepaidCards field to given value.

### HasPrepaidCards

`func (o *PrepaidCards) HasPrepaidCards() bool`

HasPrepaidCards returns a boolean if a field has been set.

### GetWarnings

`func (o *PrepaidCards) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PrepaidCards) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PrepaidCards) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PrepaidCards) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


