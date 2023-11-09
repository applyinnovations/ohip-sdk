# CopyAutoAttachElementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoAttachRule** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the auto attach configuration rule(s) to be copied. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyAutoAttachElementsRequest

`func NewCopyAutoAttachElementsRequest() *CopyAutoAttachElementsRequest`

NewCopyAutoAttachElementsRequest instantiates a new CopyAutoAttachElementsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyAutoAttachElementsRequestWithDefaults

`func NewCopyAutoAttachElementsRequestWithDefaults() *CopyAutoAttachElementsRequest`

NewCopyAutoAttachElementsRequestWithDefaults instantiates a new CopyAutoAttachElementsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoAttachRule

`func (o *CopyAutoAttachElementsRequest) GetAutoAttachRule() []CopyConfigurationCodeType`

GetAutoAttachRule returns the AutoAttachRule field if non-nil, zero value otherwise.

### GetAutoAttachRuleOk

`func (o *CopyAutoAttachElementsRequest) GetAutoAttachRuleOk() (*[]CopyConfigurationCodeType, bool)`

GetAutoAttachRuleOk returns a tuple with the AutoAttachRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoAttachRule

`func (o *CopyAutoAttachElementsRequest) SetAutoAttachRule(v []CopyConfigurationCodeType)`

SetAutoAttachRule sets AutoAttachRule field to given value.

### HasAutoAttachRule

`func (o *CopyAutoAttachElementsRequest) HasAutoAttachRule() bool`

HasAutoAttachRule returns a boolean if a field has been set.

### GetLinks

`func (o *CopyAutoAttachElementsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyAutoAttachElementsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyAutoAttachElementsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyAutoAttachElementsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyAutoAttachElementsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyAutoAttachElementsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyAutoAttachElementsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyAutoAttachElementsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


