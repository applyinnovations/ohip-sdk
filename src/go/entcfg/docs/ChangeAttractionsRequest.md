# ChangeAttractionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attractions** | Pointer to [**AttractionCodesType**](AttractionCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeAttractionsRequest

`func NewChangeAttractionsRequest() *ChangeAttractionsRequest`

NewChangeAttractionsRequest instantiates a new ChangeAttractionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeAttractionsRequestWithDefaults

`func NewChangeAttractionsRequestWithDefaults() *ChangeAttractionsRequest`

NewChangeAttractionsRequestWithDefaults instantiates a new ChangeAttractionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttractions

`func (o *ChangeAttractionsRequest) GetAttractions() AttractionCodesType`

GetAttractions returns the Attractions field if non-nil, zero value otherwise.

### GetAttractionsOk

`func (o *ChangeAttractionsRequest) GetAttractionsOk() (*AttractionCodesType, bool)`

GetAttractionsOk returns a tuple with the Attractions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractions

`func (o *ChangeAttractionsRequest) SetAttractions(v AttractionCodesType)`

SetAttractions sets Attractions field to given value.

### HasAttractions

`func (o *ChangeAttractionsRequest) HasAttractions() bool`

HasAttractions returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeAttractionsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeAttractionsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeAttractionsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeAttractionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeAttractionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeAttractionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeAttractionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeAttractionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


