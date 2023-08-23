# PostBillingCheckChargesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Check** | Pointer to [**PostBillingCheckChargesCriteriaType**](PostBillingCheckChargesCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBillingCheckChargesRequest

`func NewPostBillingCheckChargesRequest() *PostBillingCheckChargesRequest`

NewPostBillingCheckChargesRequest instantiates a new PostBillingCheckChargesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBillingCheckChargesRequestWithDefaults

`func NewPostBillingCheckChargesRequestWithDefaults() *PostBillingCheckChargesRequest`

NewPostBillingCheckChargesRequestWithDefaults instantiates a new PostBillingCheckChargesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheck

`func (o *PostBillingCheckChargesRequest) GetCheck() PostBillingCheckChargesCriteriaType`

GetCheck returns the Check field if non-nil, zero value otherwise.

### GetCheckOk

`func (o *PostBillingCheckChargesRequest) GetCheckOk() (*PostBillingCheckChargesCriteriaType, bool)`

GetCheckOk returns a tuple with the Check field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheck

`func (o *PostBillingCheckChargesRequest) SetCheck(v PostBillingCheckChargesCriteriaType)`

SetCheck sets Check field to given value.

### HasCheck

`func (o *PostBillingCheckChargesRequest) HasCheck() bool`

HasCheck returns a boolean if a field has been set.

### GetLinks

`func (o *PostBillingCheckChargesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBillingCheckChargesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBillingCheckChargesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBillingCheckChargesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBillingCheckChargesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBillingCheckChargesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBillingCheckChargesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBillingCheckChargesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


