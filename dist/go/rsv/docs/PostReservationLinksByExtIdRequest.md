# PostReservationLinksByExtIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkToReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ResponseInstruction** | Pointer to [**LinkReservationsCriteriaResponseInstruction**](LinkReservationsCriteriaResponseInstruction.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostReservationLinksByExtIdRequest

`func NewPostReservationLinksByExtIdRequest() *PostReservationLinksByExtIdRequest`

NewPostReservationLinksByExtIdRequest instantiates a new PostReservationLinksByExtIdRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReservationLinksByExtIdRequestWithDefaults

`func NewPostReservationLinksByExtIdRequestWithDefaults() *PostReservationLinksByExtIdRequest`

NewPostReservationLinksByExtIdRequestWithDefaults instantiates a new PostReservationLinksByExtIdRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkToReservationId

`func (o *PostReservationLinksByExtIdRequest) GetLinkToReservationId() UniqueIDType`

GetLinkToReservationId returns the LinkToReservationId field if non-nil, zero value otherwise.

### GetLinkToReservationIdOk

`func (o *PostReservationLinksByExtIdRequest) GetLinkToReservationIdOk() (*UniqueIDType, bool)`

GetLinkToReservationIdOk returns a tuple with the LinkToReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkToReservationId

`func (o *PostReservationLinksByExtIdRequest) SetLinkToReservationId(v UniqueIDType)`

SetLinkToReservationId sets LinkToReservationId field to given value.

### HasLinkToReservationId

`func (o *PostReservationLinksByExtIdRequest) HasLinkToReservationId() bool`

HasLinkToReservationId returns a boolean if a field has been set.

### GetLinks

`func (o *PostReservationLinksByExtIdRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReservationLinksByExtIdRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReservationLinksByExtIdRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReservationLinksByExtIdRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationIdList

`func (o *PostReservationLinksByExtIdRequest) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *PostReservationLinksByExtIdRequest) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *PostReservationLinksByExtIdRequest) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *PostReservationLinksByExtIdRequest) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *PostReservationLinksByExtIdRequest) GetResponseInstruction() LinkReservationsCriteriaResponseInstruction`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *PostReservationLinksByExtIdRequest) GetResponseInstructionOk() (*LinkReservationsCriteriaResponseInstruction, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *PostReservationLinksByExtIdRequest) SetResponseInstruction(v LinkReservationsCriteriaResponseInstruction)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *PostReservationLinksByExtIdRequest) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReservationLinksByExtIdRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReservationLinksByExtIdRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReservationLinksByExtIdRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReservationLinksByExtIdRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


