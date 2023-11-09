# ChangeScriptsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Scripts** | Pointer to [**ScriptsType**](ScriptsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeScriptsRequest

`func NewChangeScriptsRequest() *ChangeScriptsRequest`

NewChangeScriptsRequest instantiates a new ChangeScriptsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeScriptsRequestWithDefaults

`func NewChangeScriptsRequestWithDefaults() *ChangeScriptsRequest`

NewChangeScriptsRequestWithDefaults instantiates a new ChangeScriptsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeScriptsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeScriptsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeScriptsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeScriptsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetScripts

`func (o *ChangeScriptsRequest) GetScripts() ScriptsType`

GetScripts returns the Scripts field if non-nil, zero value otherwise.

### GetScriptsOk

`func (o *ChangeScriptsRequest) GetScriptsOk() (*ScriptsType, bool)`

GetScriptsOk returns a tuple with the Scripts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScripts

`func (o *ChangeScriptsRequest) SetScripts(v ScriptsType)`

SetScripts sets Scripts field to given value.

### HasScripts

`func (o *ChangeScriptsRequest) HasScripts() bool`

HasScripts returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeScriptsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeScriptsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeScriptsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeScriptsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


