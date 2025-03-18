# PostingsForRefresh

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostingsForRoomRouting** | Pointer to [**PostingsInfoType**](PostingsInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostingsForRefresh

`func NewPostingsForRefresh() *PostingsForRefresh`

NewPostingsForRefresh instantiates a new PostingsForRefresh object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingsForRefreshWithDefaults

`func NewPostingsForRefreshWithDefaults() *PostingsForRefresh`

NewPostingsForRefreshWithDefaults instantiates a new PostingsForRefresh object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostingsForRoomRouting

`func (o *PostingsForRefresh) GetPostingsForRoomRouting() PostingsInfoType`

GetPostingsForRoomRouting returns the PostingsForRoomRouting field if non-nil, zero value otherwise.

### GetPostingsForRoomRoutingOk

`func (o *PostingsForRefresh) GetPostingsForRoomRoutingOk() (*PostingsInfoType, bool)`

GetPostingsForRoomRoutingOk returns a tuple with the PostingsForRoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingsForRoomRouting

`func (o *PostingsForRefresh) SetPostingsForRoomRouting(v PostingsInfoType)`

SetPostingsForRoomRouting sets PostingsForRoomRouting field to given value.

### HasPostingsForRoomRouting

`func (o *PostingsForRefresh) HasPostingsForRoomRouting() bool`

HasPostingsForRoomRouting returns a boolean if a field has been set.

### GetLinks

`func (o *PostingsForRefresh) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostingsForRefresh) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostingsForRefresh) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostingsForRefresh) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostingsForRefresh) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostingsForRefresh) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostingsForRefresh) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostingsForRefresh) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


