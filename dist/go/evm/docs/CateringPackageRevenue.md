# CateringPackageRevenue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringPackageRevenueDetails** | Pointer to [**BlockCateringPackageRevenueBaseType**](BlockCateringPackageRevenueBaseType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewCateringPackageRevenue

`func NewCateringPackageRevenue() *CateringPackageRevenue`

NewCateringPackageRevenue instantiates a new CateringPackageRevenue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackageRevenueWithDefaults

`func NewCateringPackageRevenueWithDefaults() *CateringPackageRevenue`

NewCateringPackageRevenueWithDefaults instantiates a new CateringPackageRevenue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringPackageRevenueDetails

`func (o *CateringPackageRevenue) GetCateringPackageRevenueDetails() BlockCateringPackageRevenueBaseType`

GetCateringPackageRevenueDetails returns the CateringPackageRevenueDetails field if non-nil, zero value otherwise.

### GetCateringPackageRevenueDetailsOk

`func (o *CateringPackageRevenue) GetCateringPackageRevenueDetailsOk() (*BlockCateringPackageRevenueBaseType, bool)`

GetCateringPackageRevenueDetailsOk returns a tuple with the CateringPackageRevenueDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringPackageRevenueDetails

`func (o *CateringPackageRevenue) SetCateringPackageRevenueDetails(v BlockCateringPackageRevenueBaseType)`

SetCateringPackageRevenueDetails sets CateringPackageRevenueDetails field to given value.

### HasCateringPackageRevenueDetails

`func (o *CateringPackageRevenue) HasCateringPackageRevenueDetails() bool`

HasCateringPackageRevenueDetails returns a boolean if a field has been set.

### GetLinks

`func (o *CateringPackageRevenue) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringPackageRevenue) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringPackageRevenue) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringPackageRevenue) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringPackageRevenue) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringPackageRevenue) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringPackageRevenue) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringPackageRevenue) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


