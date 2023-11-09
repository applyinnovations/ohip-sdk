# CheckedDiscountAvailable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Discountable** | Pointer to **bool** | Determines whether the discount is available for resort or not. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCheckedDiscountAvailable

`func NewCheckedDiscountAvailable() *CheckedDiscountAvailable`

NewCheckedDiscountAvailable instantiates a new CheckedDiscountAvailable object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckedDiscountAvailableWithDefaults

`func NewCheckedDiscountAvailableWithDefaults() *CheckedDiscountAvailable`

NewCheckedDiscountAvailableWithDefaults instantiates a new CheckedDiscountAvailable object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDiscountable

`func (o *CheckedDiscountAvailable) GetDiscountable() bool`

GetDiscountable returns the Discountable field if non-nil, zero value otherwise.

### GetDiscountableOk

`func (o *CheckedDiscountAvailable) GetDiscountableOk() (*bool, bool)`

GetDiscountableOk returns a tuple with the Discountable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountable

`func (o *CheckedDiscountAvailable) SetDiscountable(v bool)`

SetDiscountable sets Discountable field to given value.

### HasDiscountable

`func (o *CheckedDiscountAvailable) HasDiscountable() bool`

HasDiscountable returns a boolean if a field has been set.

### GetLinks

`func (o *CheckedDiscountAvailable) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CheckedDiscountAvailable) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CheckedDiscountAvailable) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CheckedDiscountAvailable) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CheckedDiscountAvailable) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CheckedDiscountAvailable) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CheckedDiscountAvailable) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CheckedDiscountAvailable) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


