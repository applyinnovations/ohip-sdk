# PutUpsellRulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**UpsellRules** | Pointer to [**ConfigUpsellRulesType**](ConfigUpsellRulesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutUpsellRulesRequest

`func NewPutUpsellRulesRequest() *PutUpsellRulesRequest`

NewPutUpsellRulesRequest instantiates a new PutUpsellRulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutUpsellRulesRequestWithDefaults

`func NewPutUpsellRulesRequestWithDefaults() *PutUpsellRulesRequest`

NewPutUpsellRulesRequestWithDefaults instantiates a new PutUpsellRulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutUpsellRulesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutUpsellRulesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutUpsellRulesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutUpsellRulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUpsellRules

`func (o *PutUpsellRulesRequest) GetUpsellRules() ConfigUpsellRulesType`

GetUpsellRules returns the UpsellRules field if non-nil, zero value otherwise.

### GetUpsellRulesOk

`func (o *PutUpsellRulesRequest) GetUpsellRulesOk() (*ConfigUpsellRulesType, bool)`

GetUpsellRulesOk returns a tuple with the UpsellRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellRules

`func (o *PutUpsellRulesRequest) SetUpsellRules(v ConfigUpsellRulesType)`

SetUpsellRules sets UpsellRules field to given value.

### HasUpsellRules

`func (o *PutUpsellRulesRequest) HasUpsellRules() bool`

HasUpsellRules returns a boolean if a field has been set.

### GetWarnings

`func (o *PutUpsellRulesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutUpsellRulesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutUpsellRulesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutUpsellRulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


