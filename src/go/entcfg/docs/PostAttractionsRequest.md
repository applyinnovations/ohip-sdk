# PostAttractionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attractions** | Pointer to [**AttractionCodesType**](AttractionCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostAttractionsRequest

`func NewPostAttractionsRequest() *PostAttractionsRequest`

NewPostAttractionsRequest instantiates a new PostAttractionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAttractionsRequestWithDefaults

`func NewPostAttractionsRequestWithDefaults() *PostAttractionsRequest`

NewPostAttractionsRequestWithDefaults instantiates a new PostAttractionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttractions

`func (o *PostAttractionsRequest) GetAttractions() AttractionCodesType`

GetAttractions returns the Attractions field if non-nil, zero value otherwise.

### GetAttractionsOk

`func (o *PostAttractionsRequest) GetAttractionsOk() (*AttractionCodesType, bool)`

GetAttractionsOk returns a tuple with the Attractions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractions

`func (o *PostAttractionsRequest) SetAttractions(v AttractionCodesType)`

SetAttractions sets Attractions field to given value.

### HasAttractions

`func (o *PostAttractionsRequest) HasAttractions() bool`

HasAttractions returns a boolean if a field has been set.

### GetLinks

`func (o *PostAttractionsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAttractionsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAttractionsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAttractionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAttractionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAttractionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAttractionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAttractionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


