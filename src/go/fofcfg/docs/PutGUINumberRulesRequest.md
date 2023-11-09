# PutGUINumberRulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Rules** | Pointer to [**GUINumberRules**](GUINumberRules.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutGUINumberRulesRequest

`func NewPutGUINumberRulesRequest() *PutGUINumberRulesRequest`

NewPutGUINumberRulesRequest instantiates a new PutGUINumberRulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutGUINumberRulesRequestWithDefaults

`func NewPutGUINumberRulesRequestWithDefaults() *PutGUINumberRulesRequest`

NewPutGUINumberRulesRequestWithDefaults instantiates a new PutGUINumberRulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutGUINumberRulesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutGUINumberRulesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutGUINumberRulesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutGUINumberRulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRules

`func (o *PutGUINumberRulesRequest) GetRules() GUINumberRules`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *PutGUINumberRulesRequest) GetRulesOk() (*GUINumberRules, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *PutGUINumberRulesRequest) SetRules(v GUINumberRules)`

SetRules sets Rules field to given value.

### HasRules

`func (o *PutGUINumberRulesRequest) HasRules() bool`

HasRules returns a boolean if a field has been set.

### GetWarnings

`func (o *PutGUINumberRulesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutGUINumberRulesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutGUINumberRulesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutGUINumberRulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


