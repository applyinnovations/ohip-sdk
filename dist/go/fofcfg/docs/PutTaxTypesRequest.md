# PutTaxTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TaxTypes** | Pointer to [**[]TaxTypeType**](TaxTypeType.md) | Holds Tax Type details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTaxTypesRequest

`func NewPutTaxTypesRequest() *PutTaxTypesRequest`

NewPutTaxTypesRequest instantiates a new PutTaxTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTaxTypesRequestWithDefaults

`func NewPutTaxTypesRequestWithDefaults() *PutTaxTypesRequest`

NewPutTaxTypesRequestWithDefaults instantiates a new PutTaxTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTaxTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTaxTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTaxTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTaxTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaxTypes

`func (o *PutTaxTypesRequest) GetTaxTypes() []TaxTypeType`

GetTaxTypes returns the TaxTypes field if non-nil, zero value otherwise.

### GetTaxTypesOk

`func (o *PutTaxTypesRequest) GetTaxTypesOk() (*[]TaxTypeType, bool)`

GetTaxTypesOk returns a tuple with the TaxTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTypes

`func (o *PutTaxTypesRequest) SetTaxTypes(v []TaxTypeType)`

SetTaxTypes sets TaxTypes field to given value.

### HasTaxTypes

`func (o *PutTaxTypesRequest) HasTaxTypes() bool`

HasTaxTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTaxTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTaxTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTaxTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTaxTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


