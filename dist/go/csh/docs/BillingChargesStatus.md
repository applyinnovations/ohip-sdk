# BillingChargesStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Options** | Pointer to [**[]CheckPostBillingChargesOptionsTypeInner**](CheckPostBillingChargesOptionsTypeInner.md) | TAvailable options for this consumable | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBillingChargesStatus

`func NewBillingChargesStatus() *BillingChargesStatus`

NewBillingChargesStatus instantiates a new BillingChargesStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingChargesStatusWithDefaults

`func NewBillingChargesStatusWithDefaults() *BillingChargesStatus`

NewBillingChargesStatusWithDefaults instantiates a new BillingChargesStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *BillingChargesStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BillingChargesStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BillingChargesStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BillingChargesStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOptions

`func (o *BillingChargesStatus) GetOptions() []CheckPostBillingChargesOptionsTypeInner`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *BillingChargesStatus) GetOptionsOk() (*[]CheckPostBillingChargesOptionsTypeInner, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *BillingChargesStatus) SetOptions(v []CheckPostBillingChargesOptionsTypeInner)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *BillingChargesStatus) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### GetWarnings

`func (o *BillingChargesStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BillingChargesStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BillingChargesStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BillingChargesStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

