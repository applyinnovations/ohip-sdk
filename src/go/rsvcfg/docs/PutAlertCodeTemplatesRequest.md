# PutAlertCodeTemplatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertTemplates** | Pointer to [**AlertTemplatesType**](AlertTemplatesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutAlertCodeTemplatesRequest

`func NewPutAlertCodeTemplatesRequest() *PutAlertCodeTemplatesRequest`

NewPutAlertCodeTemplatesRequest instantiates a new PutAlertCodeTemplatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAlertCodeTemplatesRequestWithDefaults

`func NewPutAlertCodeTemplatesRequestWithDefaults() *PutAlertCodeTemplatesRequest`

NewPutAlertCodeTemplatesRequestWithDefaults instantiates a new PutAlertCodeTemplatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertTemplates

`func (o *PutAlertCodeTemplatesRequest) GetAlertTemplates() AlertTemplatesType`

GetAlertTemplates returns the AlertTemplates field if non-nil, zero value otherwise.

### GetAlertTemplatesOk

`func (o *PutAlertCodeTemplatesRequest) GetAlertTemplatesOk() (*AlertTemplatesType, bool)`

GetAlertTemplatesOk returns a tuple with the AlertTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertTemplates

`func (o *PutAlertCodeTemplatesRequest) SetAlertTemplates(v AlertTemplatesType)`

SetAlertTemplates sets AlertTemplates field to given value.

### HasAlertTemplates

`func (o *PutAlertCodeTemplatesRequest) HasAlertTemplates() bool`

HasAlertTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *PutAlertCodeTemplatesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAlertCodeTemplatesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAlertCodeTemplatesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAlertCodeTemplatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAlertCodeTemplatesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAlertCodeTemplatesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAlertCodeTemplatesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAlertCodeTemplatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


