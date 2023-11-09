# CopyTaxTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TaxType** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Tax Types to be copied. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyTaxTypesRequest

`func NewCopyTaxTypesRequest() *CopyTaxTypesRequest`

NewCopyTaxTypesRequest instantiates a new CopyTaxTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTaxTypesRequestWithDefaults

`func NewCopyTaxTypesRequestWithDefaults() *CopyTaxTypesRequest`

NewCopyTaxTypesRequestWithDefaults instantiates a new CopyTaxTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyTaxTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTaxTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTaxTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTaxTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaxType

`func (o *CopyTaxTypesRequest) GetTaxType() []CopyConfigurationCodeType`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *CopyTaxTypesRequest) GetTaxTypeOk() (*[]CopyConfigurationCodeType, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *CopyTaxTypesRequest) SetTaxType(v []CopyConfigurationCodeType)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *CopyTaxTypesRequest) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTaxTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTaxTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTaxTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTaxTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


