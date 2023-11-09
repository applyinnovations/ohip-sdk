# PostCustomTaxTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomTaxTypes** | Pointer to [**CustomTaxTypesType**](CustomTaxTypesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCustomTaxTypesRequest

`func NewPostCustomTaxTypesRequest() *PostCustomTaxTypesRequest`

NewPostCustomTaxTypesRequest instantiates a new PostCustomTaxTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCustomTaxTypesRequestWithDefaults

`func NewPostCustomTaxTypesRequestWithDefaults() *PostCustomTaxTypesRequest`

NewPostCustomTaxTypesRequestWithDefaults instantiates a new PostCustomTaxTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomTaxTypes

`func (o *PostCustomTaxTypesRequest) GetCustomTaxTypes() CustomTaxTypesType`

GetCustomTaxTypes returns the CustomTaxTypes field if non-nil, zero value otherwise.

### GetCustomTaxTypesOk

`func (o *PostCustomTaxTypesRequest) GetCustomTaxTypesOk() (*CustomTaxTypesType, bool)`

GetCustomTaxTypesOk returns a tuple with the CustomTaxTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomTaxTypes

`func (o *PostCustomTaxTypesRequest) SetCustomTaxTypes(v CustomTaxTypesType)`

SetCustomTaxTypes sets CustomTaxTypes field to given value.

### HasCustomTaxTypes

`func (o *PostCustomTaxTypesRequest) HasCustomTaxTypes() bool`

HasCustomTaxTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostCustomTaxTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCustomTaxTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCustomTaxTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCustomTaxTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCustomTaxTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCustomTaxTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCustomTaxTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCustomTaxTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


