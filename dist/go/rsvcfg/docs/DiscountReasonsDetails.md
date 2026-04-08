# DiscountReasonsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DiscountReasons** | Pointer to [**[]DiscountReasonType**](DiscountReasonType.md) | List of Discount Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDiscountReasonsDetails

`func NewDiscountReasonsDetails() *DiscountReasonsDetails`

NewDiscountReasonsDetails instantiates a new DiscountReasonsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDiscountReasonsDetailsWithDefaults

`func NewDiscountReasonsDetailsWithDefaults() *DiscountReasonsDetails`

NewDiscountReasonsDetailsWithDefaults instantiates a new DiscountReasonsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDiscountReasons

`func (o *DiscountReasonsDetails) GetDiscountReasons() []DiscountReasonType`

GetDiscountReasons returns the DiscountReasons field if non-nil, zero value otherwise.

### GetDiscountReasonsOk

`func (o *DiscountReasonsDetails) GetDiscountReasonsOk() (*[]DiscountReasonType, bool)`

GetDiscountReasonsOk returns a tuple with the DiscountReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountReasons

`func (o *DiscountReasonsDetails) SetDiscountReasons(v []DiscountReasonType)`

SetDiscountReasons sets DiscountReasons field to given value.

### HasDiscountReasons

`func (o *DiscountReasonsDetails) HasDiscountReasons() bool`

HasDiscountReasons returns a boolean if a field has been set.

### GetLinks

`func (o *DiscountReasonsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DiscountReasonsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DiscountReasonsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DiscountReasonsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DiscountReasonsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DiscountReasonsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DiscountReasonsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DiscountReasonsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


