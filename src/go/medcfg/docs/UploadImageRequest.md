# UploadImageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Images** | Pointer to [**ImageUploadInfoType**](ImageUploadInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewUploadImageRequest

`func NewUploadImageRequest() *UploadImageRequest`

NewUploadImageRequest instantiates a new UploadImageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUploadImageRequestWithDefaults

`func NewUploadImageRequestWithDefaults() *UploadImageRequest`

NewUploadImageRequestWithDefaults instantiates a new UploadImageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImages

`func (o *UploadImageRequest) GetImages() ImageUploadInfoType`

GetImages returns the Images field if non-nil, zero value otherwise.

### GetImagesOk

`func (o *UploadImageRequest) GetImagesOk() (*ImageUploadInfoType, bool)`

GetImagesOk returns a tuple with the Images field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImages

`func (o *UploadImageRequest) SetImages(v ImageUploadInfoType)`

SetImages sets Images field to given value.

### HasImages

`func (o *UploadImageRequest) HasImages() bool`

HasImages returns a boolean if a field has been set.

### GetLinks

`func (o *UploadImageRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UploadImageRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UploadImageRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UploadImageRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UploadImageRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UploadImageRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UploadImageRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UploadImageRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


