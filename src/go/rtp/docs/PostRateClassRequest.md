# PostRateClassRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RateClass** | Pointer to [**RateClassType**](RateClassType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRateClassRequest

`func NewPostRateClassRequest() *PostRateClassRequest`

NewPostRateClassRequest instantiates a new PostRateClassRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRateClassRequestWithDefaults

`func NewPostRateClassRequestWithDefaults() *PostRateClassRequest`

NewPostRateClassRequestWithDefaults instantiates a new PostRateClassRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRateClassRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRateClassRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRateClassRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRateClassRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateClass

`func (o *PostRateClassRequest) GetRateClass() RateClassType`

GetRateClass returns the RateClass field if non-nil, zero value otherwise.

### GetRateClassOk

`func (o *PostRateClassRequest) GetRateClassOk() (*RateClassType, bool)`

GetRateClassOk returns a tuple with the RateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClass

`func (o *PostRateClassRequest) SetRateClass(v RateClassType)`

SetRateClass sets RateClass field to given value.

### HasRateClass

`func (o *PostRateClassRequest) HasRateClass() bool`

HasRateClass returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRateClassRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRateClassRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRateClassRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRateClassRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


