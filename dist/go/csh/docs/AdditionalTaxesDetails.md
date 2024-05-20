# AdditionalTaxesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TaxAmountInfo** | Pointer to [**TaxAmountInfoType**](TaxAmountInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAdditionalTaxesDetails

`func NewAdditionalTaxesDetails() *AdditionalTaxesDetails`

NewAdditionalTaxesDetails instantiates a new AdditionalTaxesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdditionalTaxesDetailsWithDefaults

`func NewAdditionalTaxesDetailsWithDefaults() *AdditionalTaxesDetails`

NewAdditionalTaxesDetailsWithDefaults instantiates a new AdditionalTaxesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *AdditionalTaxesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AdditionalTaxesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AdditionalTaxesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AdditionalTaxesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaxAmountInfo

`func (o *AdditionalTaxesDetails) GetTaxAmountInfo() TaxAmountInfoType`

GetTaxAmountInfo returns the TaxAmountInfo field if non-nil, zero value otherwise.

### GetTaxAmountInfoOk

`func (o *AdditionalTaxesDetails) GetTaxAmountInfoOk() (*TaxAmountInfoType, bool)`

GetTaxAmountInfoOk returns a tuple with the TaxAmountInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxAmountInfo

`func (o *AdditionalTaxesDetails) SetTaxAmountInfo(v TaxAmountInfoType)`

SetTaxAmountInfo sets TaxAmountInfo field to given value.

### HasTaxAmountInfo

`func (o *AdditionalTaxesDetails) HasTaxAmountInfo() bool`

HasTaxAmountInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *AdditionalTaxesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AdditionalTaxesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AdditionalTaxesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AdditionalTaxesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


