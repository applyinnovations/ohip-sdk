# ChangeCustomTaxTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomTaxTypes** | Pointer to [**CustomTaxTypesType**](CustomTaxTypesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeCustomTaxTypesRequest

`func NewChangeCustomTaxTypesRequest() *ChangeCustomTaxTypesRequest`

NewChangeCustomTaxTypesRequest instantiates a new ChangeCustomTaxTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeCustomTaxTypesRequestWithDefaults

`func NewChangeCustomTaxTypesRequestWithDefaults() *ChangeCustomTaxTypesRequest`

NewChangeCustomTaxTypesRequestWithDefaults instantiates a new ChangeCustomTaxTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomTaxTypes

`func (o *ChangeCustomTaxTypesRequest) GetCustomTaxTypes() CustomTaxTypesType`

GetCustomTaxTypes returns the CustomTaxTypes field if non-nil, zero value otherwise.

### GetCustomTaxTypesOk

`func (o *ChangeCustomTaxTypesRequest) GetCustomTaxTypesOk() (*CustomTaxTypesType, bool)`

GetCustomTaxTypesOk returns a tuple with the CustomTaxTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomTaxTypes

`func (o *ChangeCustomTaxTypesRequest) SetCustomTaxTypes(v CustomTaxTypesType)`

SetCustomTaxTypes sets CustomTaxTypes field to given value.

### HasCustomTaxTypes

`func (o *ChangeCustomTaxTypesRequest) HasCustomTaxTypes() bool`

HasCustomTaxTypes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeCustomTaxTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeCustomTaxTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeCustomTaxTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeCustomTaxTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeCustomTaxTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeCustomTaxTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeCustomTaxTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeCustomTaxTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


