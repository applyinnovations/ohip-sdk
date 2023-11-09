# PostCateringPackageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**BlockCateringPackageType**](BlockCateringPackageType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RequestCount** | Pointer to **int32** | Indicates what number of retry attempt this request represents. If this is the original request, RetryCount should be set to 0. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCateringPackageRequest

`func NewPostCateringPackageRequest() *PostCateringPackageRequest`

NewPostCateringPackageRequest instantiates a new PostCateringPackageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCateringPackageRequestWithDefaults

`func NewPostCateringPackageRequestWithDefaults() *PostCateringPackageRequest`

NewPostCateringPackageRequestWithDefaults instantiates a new PostCateringPackageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostCateringPackageRequest) GetCriteria() BlockCateringPackageType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostCateringPackageRequest) GetCriteriaOk() (*BlockCateringPackageType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostCateringPackageRequest) SetCriteria(v BlockCateringPackageType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostCateringPackageRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostCateringPackageRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCateringPackageRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCateringPackageRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCateringPackageRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRequestCount

`func (o *PostCateringPackageRequest) GetRequestCount() int32`

GetRequestCount returns the RequestCount field if non-nil, zero value otherwise.

### GetRequestCountOk

`func (o *PostCateringPackageRequest) GetRequestCountOk() (*int32, bool)`

GetRequestCountOk returns a tuple with the RequestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCount

`func (o *PostCateringPackageRequest) SetRequestCount(v int32)`

SetRequestCount sets RequestCount field to given value.

### HasRequestCount

`func (o *PostCateringPackageRequest) HasRequestCount() bool`

HasRequestCount returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCateringPackageRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCateringPackageRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCateringPackageRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCateringPackageRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


