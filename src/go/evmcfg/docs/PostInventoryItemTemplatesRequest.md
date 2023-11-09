# PostInventoryItemTemplatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryItemTemplates** | Pointer to [**InventoryItemTemplatesType**](InventoryItemTemplatesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostInventoryItemTemplatesRequest

`func NewPostInventoryItemTemplatesRequest() *PostInventoryItemTemplatesRequest`

NewPostInventoryItemTemplatesRequest instantiates a new PostInventoryItemTemplatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostInventoryItemTemplatesRequestWithDefaults

`func NewPostInventoryItemTemplatesRequestWithDefaults() *PostInventoryItemTemplatesRequest`

NewPostInventoryItemTemplatesRequestWithDefaults instantiates a new PostInventoryItemTemplatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventoryItemTemplates

`func (o *PostInventoryItemTemplatesRequest) GetInventoryItemTemplates() InventoryItemTemplatesType`

GetInventoryItemTemplates returns the InventoryItemTemplates field if non-nil, zero value otherwise.

### GetInventoryItemTemplatesOk

`func (o *PostInventoryItemTemplatesRequest) GetInventoryItemTemplatesOk() (*InventoryItemTemplatesType, bool)`

GetInventoryItemTemplatesOk returns a tuple with the InventoryItemTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItemTemplates

`func (o *PostInventoryItemTemplatesRequest) SetInventoryItemTemplates(v InventoryItemTemplatesType)`

SetInventoryItemTemplates sets InventoryItemTemplates field to given value.

### HasInventoryItemTemplates

`func (o *PostInventoryItemTemplatesRequest) HasInventoryItemTemplates() bool`

HasInventoryItemTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *PostInventoryItemTemplatesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostInventoryItemTemplatesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostInventoryItemTemplatesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostInventoryItemTemplatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostInventoryItemTemplatesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostInventoryItemTemplatesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostInventoryItemTemplatesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostInventoryItemTemplatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


