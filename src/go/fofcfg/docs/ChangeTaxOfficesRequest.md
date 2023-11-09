# ChangeTaxOfficesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TaxOffices** | Pointer to [**TaxOfficesType**](TaxOfficesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeTaxOfficesRequest

`func NewChangeTaxOfficesRequest() *ChangeTaxOfficesRequest`

NewChangeTaxOfficesRequest instantiates a new ChangeTaxOfficesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTaxOfficesRequestWithDefaults

`func NewChangeTaxOfficesRequestWithDefaults() *ChangeTaxOfficesRequest`

NewChangeTaxOfficesRequestWithDefaults instantiates a new ChangeTaxOfficesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTaxOfficesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTaxOfficesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTaxOfficesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTaxOfficesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaxOffices

`func (o *ChangeTaxOfficesRequest) GetTaxOffices() TaxOfficesType`

GetTaxOffices returns the TaxOffices field if non-nil, zero value otherwise.

### GetTaxOfficesOk

`func (o *ChangeTaxOfficesRequest) GetTaxOfficesOk() (*TaxOfficesType, bool)`

GetTaxOfficesOk returns a tuple with the TaxOffices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxOffices

`func (o *ChangeTaxOfficesRequest) SetTaxOffices(v TaxOfficesType)`

SetTaxOffices sets TaxOffices field to given value.

### HasTaxOffices

`func (o *ChangeTaxOfficesRequest) HasTaxOffices() bool`

HasTaxOffices returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTaxOfficesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTaxOfficesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTaxOfficesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTaxOfficesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


